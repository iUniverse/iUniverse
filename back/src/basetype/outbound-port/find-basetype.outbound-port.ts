export type CheckInit = {
    readonly projectId : number;
    readonly name : string;
    readonly description : string;
}

export type ReturnCheckInit = {
    name : string;
    readonly result : boolean
}
export const FIND_BASETYPE_OUTBOUND_PORT = 'FIND_BASETYPE_OUTBOUND_PORT' as const;

export interface FindBasetypeOutboundPort{
    checkInit(param : CheckInit) : Promise<ReturnCheckInit>
}