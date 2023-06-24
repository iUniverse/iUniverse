import { UpdateTaskDto } from "../dto/update-task.dto";

export type UpdateTaskOutboundPortInputDto = UpdateTaskDto;
export type UpdateTaskOutboundPortOutputDto = string; //일단 제대로 되는지 확인차 string.

export type UpdateTask = {
    readonly id : number;
    readonly key : string;
    readonly value : any;
}

export type ResultUpdateTask = {
    readonly result : boolean;
}

export const UPDATE_TASK_OUTBOUND_PORT = 'UPDATE_TASK_OUTBOUND_PORT' as const;

export interface UpdateTaskOutboundPort {
    // update(
    //     params: UpdateTaskOutboundPortInputDto
    // ): Promise<UpdateTaskOutboundPortOutputDto>;
    update(data : UpdateTask) : Promise<ResultUpdateTask>
}