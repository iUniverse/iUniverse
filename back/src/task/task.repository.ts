import { CustomRepository } from "src/typeorm-ex.decorator";
import { Brackets, Not, Repository } from "typeorm";
import { CreateTaskDto } from "./dto/create-task.dto";
import { DeleteTaskDto } from "./dto/delete-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { LoadByDateDto, LoadTaskDto } from "./dto/find-task.dto";
import { Task } from "./task.entity";

@CustomRepository(Task)
export class TaskRepository extends Repository<Task>{
    async LoadTask(param : LoadTaskDto): Promise<Array<Task>>{
        const result = await this.find({where : { projectId : param.id}}); 
        
        return result;
    }

    async LoadByDate(param: LoadByDateDto): Promise<taskSchedule>{

        const firstDate = new Date(param.firstDate)
        firstDate.setDate(firstDate.getDate())
        firstDate.setHours(0, 0, 0, 0);
        const lastDate = new Date(firstDate.getFullYear(), firstDate.getMonth(), firstDate.getDate()+42, 0, 0, 0, 0);
        
        const result = await this.createQueryBuilder("task")
                            .select("task.id", "id")
                            .addSelect("task.startDate", "startDate")
                            .addSelect("task.dueDate", "dueDate")
                            .addSelect("task.name", "name")
                            .where(
                                new Brackets((qb) => {
                                    qb.where("task.startDate <= :firstDate", {firstDate: firstDate})
                                    .andWhere("task.dueDate >= :firstDate", {lastDate: lastDate})
                                })
                            )
                            .orWhere(
                                new Brackets((qb) => {
                                    qb.where("task.startDate < :lastDate", {lastDate: lastDate})
                                    .andWhere("task.dueDate > :lastDate", {lastDate: lastDate})
                                })
                            )
                            .orWhere(
                                new Brackets((qb) => {
                                    qb.where("task.startDate >= :firstDate", {firstDate: firstDate})
                                    .andWhere("task.dueDate < :lastDate", {lastDate: lastDate})
                                })
                            )
                            .orderBy("task.startDate", "ASC")
                            .addOrderBy("task.dueDate", "ASC")
                            .getRawMany();

        const schedule = await makeTaskSchedule(result, firstDate, lastDate);

        return schedule;
    }

    async CreateTask(taskInfo: CreateTaskDto): Promise<Task>{
        return await this.save(taskInfo);
    }

    async DeleteTask(taskInfo: DeleteTaskDto): Promise<void>{
        const result = await this.delete(taskInfo);
       
        if (result.affected==0){
            console.warn(`id가 ${taskInfo.id}인 태스크가 존재하지 않거나 이미 삭제되었습니다.`);
        }
        else{
            console.log('태스크가 삭제 되었습니다.');
        }
    }

    async UpdateTask(taskInfo: UpdateTaskDto): Promise<void>{

        await this.createQueryBuilder()
        .update(taskInfo)
        .set(taskInfo)
        .where('id= :id', {id: taskInfo.id})
        .execute()

        const result = await this.update(taskInfo.id, taskInfo);
        console.log('update task result: ', result);
    }
}

type taskSchedule = {
    [key: string] : [{
                        isStart: boolean,
                        task: Task,
                        width: number
                    }]
}

const makeTaskSchedule =  async (taskItems: Task[], firstDate: Date, lastDate: Date): Promise<taskSchedule> =>{
    
    let schedule = await getScheduleEmpty(firstDate);

    for await(const task of taskItems){
        const {startDate, dueDate} = await getTaskDate(task.startDate, firstDate, task.dueDate, lastDate);
        const currentDate = new Date(startDate);
        
        const period = await calcTaskPeriod(startDate, dueDate)+1;
        const day = startDate.getDay()+1;
        
        if(period < 7-day){
            
            for(let j=0; j<period; j++){
                let key = `${currentDate.getMonth()}-${currentDate.getDate()}`;
                
                
                if(j == 0) schedule[key].push({ isStart: true, task: task, width: period});
                else schedule[key].push({ isStart: false, task: task, width: period});

                currentDate.setDate(currentDate.getDate()+1);
            }
        }
        else {
            for(let j=1; j<period; j++){
                let key = `${currentDate.getMonth()}-${currentDate.getDate()}`;

                if(j == 0) schedule[key].push({ isStart: true, task: task, width: 8-day});
                else if((j-(8-day))%7==1) schedule[key].push({isStart: true, task: task, width: period-j > 7? 7: period-j});
                else schedule[key].push({ isStart: false, task: task, width: -1});

                currentDate.setDate(currentDate.getDate()+1);
            }
        }
    }
    return schedule;
}

const getTaskDate = async(startDate:Date, firstDate:Date, dueDate:Date, lastDate:Date)=>{
    
    if(startDate < firstDate){ 
        if(dueDate > lastDate){
            return {startDate: firstDate, dueDate: lastDate};
        }
        else{
            return {startDate: firstDate, dueDate: dueDate};
        }
    }
    else{
        if(dueDate > lastDate){
            return {startDate: startDate, dueDate: lastDate};
        }
        else{
            return {startDate: startDate, dueDate: dueDate};
        }
    }
}

const getScheduleEmpty = async (firstDate: Date): Promise<taskSchedule> => {
    const date = new Date(firstDate);
    let schedule = {};

    schedule[`${date.getMonth()}-${date.getDate()}`] = []

    //키 : Date
    for (let i=0; i<41; i++){
        date.setDate(date.getDate()+1)
        let key = `${date.getMonth()}-${date.getDate()}`;

        schedule[key] = [];
    }

    return schedule;
}

//기간 계산하는 함수
const calcTaskPeriod = async (start:Date, due:Date)=>{
    const date1 = new Date(start.getFullYear(), start.getMonth(), start.getDate())
    const date2 = new Date(due.getFullYear(), due.getMonth(), due.getDate());
  
    const diffDate = Math.abs(date1.getTime() - date2.getTime());
  
    return Math.ceil((diffDate / (1000 * 60 * 60 * 24))); // 밀리세컨 * 초 * 분 * 시 = 일
}

// //총 기간, 지난 시간, 남은 시간, 표시할 길이를 반환하는 함수
// const getPeriodInfo = (startDate:Date, dueDate:Date, currentDate:Date) => {
//     const total = calcTaskPeriod(startDate, dueDate);
//     const past = calcTaskPeriod(startDate, currentDate);
//     const remaining = total-past+1;
//     const maxWidth = 7-currentDate.getDay();

//     const rate = remaining > maxWidth? maxWidth: remaining;

//     return {total, past, remaining, rate}
// }