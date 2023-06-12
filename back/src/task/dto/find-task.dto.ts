import { IsNotEmpty } from "class-validator";

//테스트하기위해 id와 이름만 받아도 되도록 해놨음 나중에 바꿔야함.
export class FindTaskDto {
    @IsNotEmpty()
    readonly id: number;
    @IsNotEmpty()
    readonly name: string;
    readonly description?: string;
    readonly startDate?: Date;
    readonly dueDate?: Date;
    readonly completionDate?: Date;
    readonly createDate?: Date;
    readonly score?: number;
    readonly statusId?: number;
    readonly typeId?: number;
    readonly parentTaskId?: number;
    readonly creatorId?: number;
    readonly projectId?: number;
}

export class LoadTaskDto {
    id : number;
}