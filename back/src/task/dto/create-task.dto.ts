import { IsNotEmpty } from "class-validator";

export class CreateTaskDto{
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