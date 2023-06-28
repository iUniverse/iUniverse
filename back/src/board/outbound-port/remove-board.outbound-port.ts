export const REMOVE_BOARD_OUTBOUND_PORT = 'REMOVE_BOARD_OUTBOUND_PORT' as const;

export interface RemoveBoardOutboundPort{
    remove(param : number) : Promise<boolean>
}