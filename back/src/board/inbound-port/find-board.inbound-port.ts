export class ResultBoard{
    id : number;
    name : string;
    color : string;
    fontColor : string;
    taskOrder : number[] | null;
    orderNum : number;
}

export const FIND_BOARD_INBOUND_PORT = 'FIND_BOARD_INBOUND_PORT' as const;

export interface FindBoardInboundPort{
    loadBoardByProjectId(param : number) :Promise<ResultBoard[]>
}