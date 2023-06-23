

export type RemoveSubtypeResult = {
    result : boolean;
}

export const REMOVE_SUBTYPE_OUTBOUND_PORT = 'REMOVE_SUBTYPE_OUTBOUND_PORT';

export interface RemoveSubtypeOutboundPort{
    remove(param : number) : Promise<RemoveSubtypeResult>
}