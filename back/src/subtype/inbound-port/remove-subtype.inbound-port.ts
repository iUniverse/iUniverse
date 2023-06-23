export class RemoveSubtypeResult {
    result : boolean;
}

export const REMOVE_SUBTYPE_INBOUND_PORT = 'REMOVE_SUBTYPE_INBOUND_PORT' as const;

export interface RemoveSubtypeInboundPort{
    remove(param : number) : Promise<RemoveSubtypeResult>
}