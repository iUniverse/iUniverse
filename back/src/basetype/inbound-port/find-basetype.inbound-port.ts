export class CheckInit {
    readonly projectId : number;
    readonly name : string;
}

export const FIND_BASETYPE_INBOUND_PORT = 'FIND_BASETYPE_INBOUND_PORT' as const;

export interface FindBasetypeInboundPort{
    checkInit(data : CheckInit) : Promise<boolean>;
}



