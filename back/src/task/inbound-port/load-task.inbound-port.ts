import { FindTaskDto } from "../dto/find-task.dto";

export type LoadTaskInboundPortInputDto = void;
export type LoadTaskInboundPortOutputDto = Array<FindTaskDto>;

export const LOAD_TASK_INBOUND_PORT = 'LOAD_TASK_INBOUND_PORT' as const;

export interface LoadTaskInboundPort{
    load( params : LoadTaskInboundPortInputDto )
    : Promise<LoadTaskInboundPortOutputDto>; 
}