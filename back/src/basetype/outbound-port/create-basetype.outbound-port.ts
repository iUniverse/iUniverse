
export type BaseTypeInit = {
    readonly name : string;
    readonly description : string;
    projectId : number | undefined;
}

export type ReturnBasetype = {
    readonly id : number;
    readonly name : string;
    readonly description : string;
    readonly createDate : Date;
    readonly projectId: number;
}

export const CREATE_BASETYPE_OUTBOUND_PORT = 'CREATE_BASETYPE_OUTBOUND_PORT' as const;

export interface CreateBasetypeOutboundPort{
    createInit(data : BaseTypeInit) : Promise<ReturnBasetype>   
}