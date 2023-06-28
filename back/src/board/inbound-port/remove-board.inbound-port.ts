export const REMOVE_BOARD_INBOUND_PORT = 'REMOVE_BOARD_INBOUND_PORT' as const;

export interface RemoveBoardInboundPort{
    remove(param : number) : Promise<boolean>
}