import { UpdateTaskDto } from "../dto/update-task.dto";

export type UpdateTaskInboundPortInputDto = UpdateTaskDto;
export type UpdateTaskInboundPortOutputDto = string;

export const UPDATE_TASK_INBOUND_PORT = 'UPDATE_TASK_INBOUND_PORT' as const;

export interface UpdateTaskInboundPort{
    update(
        params : UpdateTaskInboundPortInputDto,
    ): Promise<UpdateTaskInboundPortOutputDto>; 
}