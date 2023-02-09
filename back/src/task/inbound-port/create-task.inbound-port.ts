import { CreateTaskDto } from "../dto/create-task.dto";

export type CreateTaskInboundPortInputDto = CreateTaskDto;
export type CreateTaskInboundPortOutputDto = CreateTaskDto;

export const CREATE_TASK_INBOUND_PORT = 'CREATE_TASK_INBOUND_PORT' as const;

export interface CreateTaskInboundPort{
    create(
        params : CreateTaskInboundPortInputDto,
    ): Promise<CreateTaskInboundPortOutputDto>; 
}