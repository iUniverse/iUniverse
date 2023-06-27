import { IsNotEmpty } from "class-validator";

export class CreateBoardTaskMap{
    @IsNotEmpty()
    readonly boardId : number;
    @IsNotEmpty()
    readonly taskId : number;
}

export class ResultCreateBoardTaskMap{
    readonly id : number;
    readonly boardId : number;
    readonly taskId : number;
}

export const CREATE_BOARD_TASK_MAP_INBOUND_PORT = 'CREATE_BOARD_TASK_MAP_INBOUND_PORT' as const;

export interface CreateBoardTaskMapInboundPort{
    create(data : CreateBoardTaskMap) : Promise<ResultCreateBoardTaskMap>
}