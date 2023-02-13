import { DeleteTaskDto } from "../dto/delete-task.dto";


export type DeleteTaskOutboundPortInputDto = DeleteTaskDto;
export type DeleteTaskOutboundPortOutputDto = string; //일단 제대로 되는지 확인차 string.

export const DELETE_TASK_OUTBOUND_PORT = 'DELETE_TASK_OUTBOUND_PORT' as const;

export interface DeleteTaskOutboundPort {
    delete(
        params: DeleteTaskOutboundPortInputDto
    ): Promise<DeleteTaskOutboundPortOutputDto>;
}