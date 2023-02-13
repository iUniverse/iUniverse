import { IsNotEmpty } from "class-validator";

export class DeleteTaskDto{
    @IsNotEmpty()
    readonly id: number;
}