import { IsNotEmpty } from "class-validator";

export class FindProjectDto {
    @IsNotEmpty()
    name : string;
    description : string;
    updateDate : Date;
    color : string;
    startDate : Date;
    endDate : Date;
    dueDate : Date;
    processRate : number;
    typeId : number;
    statusId : number;
    creatorId : number;
    @IsNotEmpty()
    id : number;
    @IsNotEmpty()
    createDate : Date;
    isPrivate : boolean;
}