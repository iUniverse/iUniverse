export type CheckInit = {
    readonly projectId : number;
    readonly name : string;
}

export const FIND_BASETYPE_OUTBOUND_PORT = 'FIND_BASETYPE_OUTBOUND_PORT' as const;

export interface FindBasetypeOutboundPort{
    checkInit(param : CheckInit) : Promise<boolean>
}