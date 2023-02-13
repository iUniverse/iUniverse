import { DeleteTaskDto } from "../dto/delete-task.dto";

export type DeleteTaskInboundPortInputDto = DeleteTaskDto;
export type DeleteTaskInboundPortOutputDto = string;

export const DELETE_TASK_INBOUND_PORT = 'DELETE_TASK_INBOUND_PORT' as const;

export interface DeleteTaskInboundPort{
    delete(
        params : DeleteTaskInboundPortInputDto,
    ): Promise<DeleteTaskInboundPortOutputDto>; 
}