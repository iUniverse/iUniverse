export interface Project{
    id : number,
    name : string,
    description : string,
    createDate : string,
    dueDate : string,
    startDate : string,
    endDate : string,
    isFavorite : boolean,
    isPrivate : boolean,
    processRate : number,
    statusId : number,
    typeId : number,
    color : string
}

export interface CatStyle {
    background : string;
    leftEye : string;
    leftEyeWhite : string;
    rightEye : string,
    rightEyeWhite : string;
    nose : string
    body : string;
}

export interface ThemeInfo {
    id: number;
    name: string;
}

export interface Task {
    id : number,
    name : string,
    description : string,
    createDate : string
}