export const FIND_BOARD_TASK_MAP_INBOUND_PORT = 'FIND_BOARD_TASK_MAP_INBOUND_PORT' as const;

export type ResultLoadTaskByBoardId = {
    id : number;
    name : string;
    description : string | null;
    startDate : Date | null;
    dueDate : Date | null;
    completionDate : Date | null;
    score : number | null;
    statusId : number;
    typeId : number | null;
    projectId : number;
}

export interface FindBoardTaskMapInboundPort{
    loadByBoardId(param : number) : Promise<ResultLoadTaskByBoardId>
}