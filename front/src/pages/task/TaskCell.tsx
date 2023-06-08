import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { DateInfo } from "./Weeks";
import { taskItemsState, TaskItem, isSameDate } from "../../state/TaskState";
import styles from "../../styles/Calendar.module.css";
import { ReactNode, use, useCallback, useEffect, useMemo, useState } from "react";
import { calendarCellState } from "src/state/CalendarState";

export default function TaskCell({number, date}:DateInfo){
    const maxTaskCount = 4;
    const [taskItems, setTaskItems] = useRecoilState(taskItemsState(date));
    const [isMoreTask, setIsMoreTask] = useState(false);
    
    const taskList = useMemo(()=>{
        const newTaskList:ReactNode[] = [];
        for (let i=0; i< taskItems.length; i++){
            const props = {taskItems: {...taskItems[i]}, cellDate: date, index: i}
            newTaskList.push(<Task key={`taskItem_${number}_${i}`} {...props} ></Task>)            
        }

        return newTaskList;
    }, [taskItems]);

    return (
        <div className={`${styles.task__container} ${styles.cell}`}>
            {taskList}
        </div>
    );
}

const Task = ({cellDate, taskItems, index}:{taskItems: TaskItem, cellDate: Date, index: number}) =>{
    const {name, startDate, dueDate} = taskItems;
    
    const currentCalendarCell = useRecoilValue(calendarCellState(cellDate))[index];
    //태스크 일정표시를 위한 정보를 가져옴.
    const nextDate = new Date(cellDate.getFullYear(), cellDate.getMonth(), cellDate.getDate()+1);
    const setNextCalendarCell = useSetRecoilState (calendarCellState(nextDate));

    //해당 번째에 이미 일정표시가 되어있다면
    if(currentCalendarCell != 0){
        setNextCalendarCell((cell: number[])=> setCalendarCell(cell, index, currentCalendarCell-1))
        return <div className={styles.task__item} style = {{backgroundColor: 'white'}}></div>;
    }

    const taskStyle = useMemo(()=>{

        if(!startDate || !dueDate){
            setNextCalendarCell((cell:number[]) => setCalendarCell(cell, index, 0))

            return {width: 'calc(100% - 20px)'};
        }

        const {total, past, remaining, rate} = getPeriodInfo(startDate, dueDate, cellDate);

        //현재 날짜가 시작일과 동일할 때 기간 값도 표시해야함.
        if(past == 0) setNextCalendarCell((cell: number[])=> setCalendarCell(cell, index, total+1));
        else setNextCalendarCell((cell: number[])=> setCalendarCell(cell, index, remaining))
        
        return {width: `calc((100% * ${rate}) - 20px)`};

    },[startDate, dueDate]);
    

    return (
        <div className={`${startDate? styles.long: styles.short} ${styles.task__item}`} style={taskStyle}>
            {name}
        </div>
    );
}

const setCalendarCell = (cell:number[], index: number, remaining:number)=>{
    const newNextCell = [...cell];
    newNextCell[index] = remaining;
    return newNextCell;
}

//기간 계산하는 함수
const calcTaskPeriod = (start:Date, due:Date)=>{
    const date1 = new Date(start.getFullYear(), start.getMonth(), start.getDate())
    const date2 = new Date(due.getFullYear(), due.getMonth(), due.getDate());
  
    const diffDate = Math.abs(date1.getTime() - date2.getTime());
  
    return Math.ceil((diffDate / (1000 * 60 * 60 * 24))); // 밀리세컨 * 초 * 분 * 시 = 일
}

//총 기간, 지난 시간, 남은 시간, 표시할 길이를 반환하는 함수
const getPeriodInfo = (startDate:Date, dueDate:Date, currentDate:Date) => {
    const total = calcTaskPeriod(startDate, dueDate);
    const past = calcTaskPeriod(startDate, currentDate);
    const remaining = total-past+1;
    const maxWidth = 7-currentDate.getDay();

    const rate = remaining > maxWidth? maxWidth: remaining;

    return {total, past, remaining, rate}
}

//기간 순 태스크 정렬하여 우선순위정하기.
