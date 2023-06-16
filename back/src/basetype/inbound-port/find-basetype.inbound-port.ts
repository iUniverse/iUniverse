export class ReturnCheckInit {
    readonly name : string;
    readonly result : boolean
}

export const FIND_BASETYPE_INBOUND_PORT = 'FIND_BASETYPE_INBOUND_PORT' as const;

export interface FindBasetypeInboundPort{
    checkInit(data : number) : Promise<Array<ReturnCheckInit>>;
}



