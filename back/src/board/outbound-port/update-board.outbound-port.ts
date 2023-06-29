export type UpdateBoard = {
    readonly id : number;
    readonly key : string;
    readonly value : any;
}

export const UPDATE_BOARD_OUTBOUND_PORT = 'UPDATE_BOARD_OUTBOUND_PORT' as const;

export interface UpdateBoardOutboundPort {
    update(data : UpdateBoard) : Promise<boolean>
}