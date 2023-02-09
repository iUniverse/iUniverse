import { CreateTaskDto } from "../dto/create-task.dto";

export type CreateTaskOutboundPortInputDto = CreateTaskDto;
export type CreateTaskOutboundPortOutputDto = CreateTaskDto;

export const CREATE_TASK_OUTBOUND_PORT = 'CREATE_TASK_OUTBOUND_PORT' as const;

export interface CreateTaskOutboundPort {
    create(
        params: CreateTaskOutboundPortInputDto
    ): Promise<CreateTaskOutboundPortOutputDto>;
}