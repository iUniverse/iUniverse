import { useRecoilValue, RecoilEnv, useRecoilValueLoadable } from "recoil";
import { firstDateState } from "src/state/CalendarState";
import TaskCell from "./TaskCell";
import DateCell from "./DateCell";
import styles from "../../styles/Calendar.module.css";
import React, { useEffect, useState } from "react";
// import dynamic from "next/dynamic";

//Duplicate atom key 에러 문구 없애줌
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export default function Weeks(){
    const firstDate = useRecoilValue(firstDateState);
    let weeks = [];

    for (let i=0; i<42; i=i+7){
        let date = new Date(firstDate.getFullYear(), firstDate.getMonth(), firstDate.getDate()+i);
        weeks.push(<Week key={'week_'+i} number={i} date={date}></Week>)
    }

    return <>{weeks}</>;
}

export interface DateInfo {
    number: number,
    date: Date
}
  
function Week({number, date}:DateInfo){

    let days = [];
    let taskList = [];

    for (let i=0; i<7; i++){
        const dateKey = 'date_'+number+'_'+i;
        let dateInfo = {
            number: number,
            date: new Date(date.getFullYear(), date.getMonth(), date.getDate()+i)
        };
        days.push(<DateCell key={dateKey} {...dateInfo}></DateCell>);

        const taskKey = 'taskBox_'+number+'_'+i; 
        taskList.push(
            <TaskCell key={taskKey} {...dateInfo}></TaskCell>
        )
    }

    return (
        <div className={styles.week__container}>
            <div className={styles.week__table}>
                {days}
            </div>
            <div className={styles.week__events}>
                {taskList}
            </div>
        </div>
        );
}