import { IsNotEmpty } from "class-validator";
import { FindTaskDto } from "../dto/find-task.dto";
import { Task } from "../task.entity";

// export type LoadTaskInboundPortInputDto = void;

export type LoadTaskIPInputDto = {
    id: number;
}

export type LoadByDateIPInputDto = {
    firstDate: Date;
}

export type LoadTaskInboundPortOutputDto = Array<FindTaskDto>;

export type LoadByDateInboundPortOutputDto =  {
    [key: string] : [{
                        isStart: boolean,
                        task: Task,
                        width: number
                    }]
};

export const LOAD_TASK_INBOUND_PORT = 'LOAD_TASK_INBOUND_PORT' as const;


export interface LoadTaskInboundPort{
    load(params : LoadTaskIPInputDto )
    : Promise<LoadTaskInboundPortOutputDto>; 
}

export interface LoadByDateInboundPort{
    loadByDate(params : LoadByDateIPInputDto )
    : Promise<LoadByDateInboundPortOutputDto>; 
}