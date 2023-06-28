export type ResultBoard = {
    id : number;
    name : string;
    color : string;
    fontColor : string;
    taskOrder : number[] | null
    orderNum : number;
}

export const FIND_BOARD_OUTBOUND_PORT = 'FIND_BOARD_OUTBOUND_PORT' as const;

export interface FindBoardOutboundPort {
    loadBoardByProjectId(param : number) : Promise<ResultBoard[]>
}