import { atom, atomFamily, selector } from "recoil"


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

const taskInfo = [
    {
        id: 1,
        name: '태스크1111',
        startDate: new Date('2023-06-12'),
        deuDate: new Date('2023-06-22'),
        createDate: new Date('2023-06-11')
    },
    {
        id: 2,
        name: '태스크22222',
        startDate: new Date('2023-05-17'),
        deuDate: new Date('2023-06-20'),
        createDate: new Date('2023-04-16')
    },
    {
        id: 3,
        name: '태스크3333',
        createDate: new Date('2023-06-25')
    },
]

const taskInfo2:TaskItem[] = [
    {
        id: 1,
        name: '태스크1111',
        createDate: new Date('2023-06-01'),
        startDate: new Date('2023-06-11'),
        dueDate: new Date('2023-06-22')
    },
    {
        id: 2,
        name: '태스크22222',
        createDate: new Date('2023-06-16')
    },
    {
        id: 3,
        name: '태스크3333',
        createDate: new Date('2023-06-25'),
        startDate: new Date('2023-06-14'),
        dueDate: new Date('2023-07-01')
    },
    {
        id: 4,
        name: '태스크4444',
        createDate: new Date('2023-06-25')
    },
    {
        id: 5,
        name: '태스크5555',
        createDate: new Date('2023-06-25')
    },
    {
        id: 6,
        name: '태스크6666',
        createDate: new Date('2023-06-25')
    },
]

export const taskItemsState = atomFamily<TaskItem[]|[], Date>({
    key: 'taskItemsState',
    default: (date)=>{
        return taskInfo2.filter((v)=> {
            if (v.startDate && v.dueDate) 
                return isSameDate(v.startDate, date) || 
                        (date.getDay() == 0 &&
                        (isSameDate(v.dueDate, date) || 
                        (v.startDate < date && date < v.dueDate)));

            return isSameDate(v.createDate, date);
        })
    }
})

export const isSameDate = (date1:Date, date2:Date) : boolean =>{
    return date1.getFullYear() === date2.getFullYear()
    && date1.getMonth() === date2.getMonth()
    && date1.getDate() === date2.getDate();
}