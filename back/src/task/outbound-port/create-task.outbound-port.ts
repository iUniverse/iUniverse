import { FindTaskDto } from "../dto/find-task.dto";

export type CreateTaskOutboundPortInputDto = FindTaskDto;
export type CreateTaskOutboundPortOutputDto = FindTaskDto;

export const CREATE_TASK_OUTBOUND_PORT = 'CREATE_TASK_OUTBOUND_PORT' as const;

export interface CreateTaskOutboundPort {
    create(
        params: CreateTaskOutboundPortInputDto
    ): Promise<CreateTaskOutboundPortOutputDto>;
}