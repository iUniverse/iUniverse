import { FindTaskDto } from "../dto/find-task.dto";


// export type LoadTaskOutboundPortInputDto = void;
export type LoadTaskOPInputDto = {
    id : number;
}
export type LoadTaskOutboundPortOutputDto = Array<FindTaskDto>;

export const LOAD_TASK_OUTBOUND_PORT = 'LOAD_TASK_OUTBOUND_PORT' as const;

export interface LoadTaskOutboundPort {
    load(param : LoadTaskOPInputDto): Promise<LoadTaskOutboundPortOutputDto>;
}