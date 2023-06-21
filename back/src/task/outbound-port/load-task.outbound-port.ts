import { FindTaskDto } from "../dto/find-task.dto";
import { Task } from "../task.entity";


// export type LoadTaskOutboundPortInputDto = void;
export type LoadTaskOPInputDto = {
    id : number;
}

export type LoadByDateOPInputDto = {
    firstDate: Date;
}

export type LoadTaskOutboundPortOutputDto = Array<FindTaskDto>;

export type LoadByDateOPOutputDto = {
    [key: string] : [{
                        isStart: boolean,
                        task: Task,
                        width: number
                    }]
}

export const LOAD_TASK_OUTBOUND_PORT = 'LOAD_TASK_OUTBOUND_PORT' as const;

export interface LoadTaskOutboundPort {
    load(param : LoadTaskOPInputDto): Promise<LoadTaskOutboundPortOutputDto>;
}

export interface LoadByDateboundPort {
    loadByDate(param: LoadByDateOPInputDto): Promise<LoadByDateOPOutputDto>;
}