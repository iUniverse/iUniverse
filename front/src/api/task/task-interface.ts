


export interface Task {
    id: number;
    completionDate: string;
    createDate: string;
    creatorId: number | null;
    description: string;
    dueDate: string | null;
    name: string;
    parentTaskId: number | null;
    projectId: number;
    score: number | null;
    startDate: string | null;
    statusId: number | null;
    typeId: number | null;
    boardId: number | null;
}

export interface Board {
    id: number;
    name: string;
    color: string;
    fontColor: string;
    taskOrder: number[] | null
    orderNum: number;
    projectId : number;
    createDate : Date;
}

// export interface CurrentBoard {
//     id : number;
//     color : string;
//     createDate : Date;
//     fontColor : string;
//     name : string;
//     orderNum : number;
//     projectId : number;
//     taskOrder : number[];
// }

export interface Subtype {
    id: number;
    name: string;
    description: string;
    color: string;
    fontColor: string;
    createDate: Date;
    basetypeId: number;
    orderNum: number;
    defaultVal: boolean;
}

export interface TaskDetailViewType {
    [key: string]: string
}

const TASK_DETAIL_VIEW_TYPE : TaskDetailViewType = {
    'hide': 'task-detail-view-hide',
    'half': 'task-detail-view-half',
    'full': 'task-detail-view-full'
}

