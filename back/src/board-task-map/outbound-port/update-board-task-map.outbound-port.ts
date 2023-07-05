import { IsNotEmpty } from "class-validator";

export class UpdateBoardTaskMap{
    @IsNotEmpty()
    taskId : number;
    @IsNotEmpty()
    boardId : number;
    @IsNotEmpty()
    updateBoardId : number | undefined | null;
    @IsNotEmpty()
    updateTaskId : number | undefined | null;
}

export const UPDATE_BOARD_TASK_MAP_OUTBOUND_PORT = 'UPDATE_BOARD_TASK_MAP_OUTBOUND_PORT' as const;

export interface UpdateBoardTaskMapOutboundPort { 
    updateBoardId(data : UpdateBoardTaskMap) : Promise<boolean>
}
