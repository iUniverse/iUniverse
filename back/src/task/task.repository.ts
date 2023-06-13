import { CustomRepository } from "src/typeorm-ex.decorator";
import { Repository } from "typeorm";
import { CreateTaskDto } from "./dto/create-task.dto";
import { DeleteTaskDto } from "./dto/delete-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { LoadTaskDto } from "./dto/find-task.dto";
import { Task } from "./task.entity";

@CustomRepository(Task)
export class TaskRepository extends Repository<Task>{
    async LoadTask(param : LoadTaskDto): Promise<Array<Task>>{
        const result = await this.find({where : { projectId : param.id}}); 
        
        return result;
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