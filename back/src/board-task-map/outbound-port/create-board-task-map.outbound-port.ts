export type CreateBoardTaskMap = {
    readonly boardId : number;
    readonly taskId : number;
}

export type ResultCreateBoardTaskMap = {
    readonly id : number;
    readonly boardId : number;
    readonly taskId : number;
}

export const CREATE_BOARD_TASK_MAP_OUTBOUND_PORT = 'CREATE_BOARD_TASK_MAP_OUTBOUND_PORT' as const;

export interface CreateBoardTaskMapOutboundPort {
    create(data : CreateBoardTaskMap) : Promise<ResultCreateBoardTaskMap>
}