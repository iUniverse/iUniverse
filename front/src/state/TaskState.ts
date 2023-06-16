import { atom, atomFamily, selector } from "recoil"
import router from 'next/router';
import { calendarInfoState } from "./CalendarState";

export interface TaskItem {
    readonly id: number,
    name: string,
    createDate: Date;
    description?: string;
    startDate?: Date;
    dueDate?: Date;
    completionDate?: Date;
    score?: number;
    statusId?: number;
    typeId?: number;
    parentTaskId?: number;
    creatorId?: number;
    projectId?: number;
}

export const taskItemsState = selector<TaskItem[]>({
    key: 'taskItemsState',
    get: async ({get})=>{
        const response = await fetch(
            `http://localhost:3500/iuni_task/search/date/${get(calendarInfoState)}`
        )
        const taskItems = await response.json();

        return taskItems;
    }
});

export const isSameDate = (date1:Date, date2:Date) : boolean =>{
    return date1.getFullYear() === date2.getFullYear()
    && date1.getMonth() === date2.getMonth()
    && date1.getDate() === date2.getDate();
}




// [{
//     "name": "태스크1111",
//     "createDate": "2023-06-01 11:35:20.410112",
//     "startDate": "2023-06-11",
//     "dueDate": "2023-06-22"
// },
// {
//     "name": "태스크22222",
//     "createDate":"2023-06-16"
// },
// {
//     "name": "태스크3333",
//     "createDate": "2023-06-25",
//     "startDate": "2023-06-14",
//     "dueDate": "2023-07-01"
// },
// {
//     "name": "태스크4444",
//     "createDate": "2023-06-25"
// },
// {
//     "name": "태스크5555",
//     "createDate": "2023-06-25"
// },
// {
//     "name": "태스크6666",
//     "createDate":"2023-06-25"
// }]