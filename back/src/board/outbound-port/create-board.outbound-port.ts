export type CreateBoard = {
    readonly name : string;
    readonly creatorId : number;
    readonly projectId : number;
}

export type ResultCreateBoard = {
    readonly id : number;
    readonly name : string;
    readonly createDate : Date;
    readonly projectId : number;
}

export const CREATE_BOARD_OUTBOUND_PORT = 'CREATE_BOARD_OUTBOUND_PORT' as const;

export interface CreateBoardOutboundPort{
    create(data : CreateBoard) : Promise<ResultCreateBoard>
}

