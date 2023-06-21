import { useRecoilState, useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { DateInfo } from "./Weeks";
import { taskItemsState, TaskItem, isSameDate } from "../../state/TaskState";
import styles from "../../styles/Calendar.module.css";
import React, { ReactNode, use, useCallback, useEffect, useMemo, useState } from "react";

export default function TaskCell({number, date}:DateInfo){
    const maxTaskCount = 4;
    const [isMoreTask, setIsMoreTask] = useState(false);
    const taskItems = useRecoilValueLoadable(taskItemsState);
    const [hydrated, setHydrated] = useState(false);

    useEffect(()=>{
        setHydrated(true);
    }, [])

    if(hydrated){
        switch (taskItems.state){
            case 'hasValue':
                return <div className={`${styles.task__container} ${styles.cell}`}>{taskItems.contents.length}</div>
            case 'loading':
                return <div>Loading...</div>;
            case 'hasError':
                throw taskItems;
        }
    }

    return <div>Loading... </div>

    
    // const taskList = useMemo(()=>{
    //     const newTaskList:ReactNode[] = [];
    //     for (let i=0; i< taskItems.length; i++){
    //         const props = {taskItems: {...taskItems[i]}, cellDate: date, index: i}
    //         newTaskList.push(<Task key={`taskItem_${number}_${i}`} {...props} ></Task>)            
    //     }

    //     return newTaskList;
    // }, [taskItems]);
    const taskList = <></>;

    return (
        <div className={`${styles.task__container} ${styles.cell}`}>
            {taskList}
        </div>
    );
}

const Task = ({cellDate, taskItems, index}:{taskItems: TaskItem, cellDate: Date, index: number}) =>{
    const {name, startDate, dueDate} = taskItems;

    const taskStyle = useMemo(()=>{

        if(!startDate || !dueDate){

            return {width: 'calc(100% - 20px)'};
        }
        
        return {width: `calc(100% - 20px)`};

    },[startDate, dueDate]);
    

    return (
        <div className={`${startDate? styles.long: styles.short} ${styles.task__item}`} style={taskStyle}>
            {name}
        </div>
    );
}