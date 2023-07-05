import { IsNotEmpty } from "class-validator";

export class UpdateBoardTaskMap{
    @IsNotEmpty()
    taskId : number;
    @IsNotEmpty()
    boardId : number;
    updateBoardId : number | undefined | null;
    updateTaskId : number | undefined | null;
}

export const UPDATE_BOARD_TASK_MAP_INBOUND_PORT = 'UPDATE_BOARD_TASK_MAP_INBOUND_PORT' as const;

export interface UpdateBoardTaskMapInboundPort { 
    updateBoardId(data : UpdateBoardTaskMap) : Promise<boolean>
}


