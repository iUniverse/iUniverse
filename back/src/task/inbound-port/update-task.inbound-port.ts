import { IsNotEmpty } from "class-validator";
import { UpdateTaskDto } from "../dto/update-task.dto";

export type UpdateTaskInboundPortInputDto = UpdateTaskDto;

export type UpdateTaskInboundPortOutputDto = string;

export class UpdateTask{
    @IsNotEmpty()
    id : number;
    @IsNotEmpty()
    key : string;
    @IsNotEmpty()
    value : any
}

export class ResultUpdateTask{
    result : boolean;
}

export const UPDATE_TASK_INBOUND_PORT = 'UPDATE_TASK_INBOUND_PORT' as const;

export interface UpdateTaskInboundPort{
    // update(
    //     params : UpdateTaskInboundPortInputDto,
    // ): Promise<UpdateTaskInboundPortOutputDto>; 

    update(data : UpdateTask) : Promise<ResultUpdateTask>
}