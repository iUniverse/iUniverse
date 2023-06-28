export type CreateBoard = {
    readonly name : string;
    readonly orderNum : number;
    readonly projectId : number;
    readonly color : string;
    readonly fontColor : string;
}

export type ResultCreateBoard = {
    readonly id : number;
    readonly name : string;
    readonly createDate : Date;
    readonly projectId : number;
    readonly orderNum :number;
    readonly color : string;
    readonly fontColor : string;
}

export type InitCreateBoard = {
    readonly type : string;
    readonly projectId : number;
}

export type ResultInitCreateBoard = {
    readonly result : boolean;
}

export const CREATE_BOARD_OUTBOUND_PORT = 'CREATE_BOARD_OUTBOUND_PORT' as const;

export interface CreateBoardOutboundPort{
    create(data : CreateBoard) : Promise<ResultCreateBoard>

    createInit(data : CreateBoard) : Promise<ResultInitCreateBoard>
}

