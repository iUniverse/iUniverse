export type SubtypeInit = { 
    readonly name : string;
    readonly description : string;
    readonly color : string;
    readonly fontColor : string;
    readonly baseTypeId : number;
    readonly orderNum : number;
}

export type ReturnSubtype = {
    readonly id : number;
    readonly name : string;
    readonly description : string;
    readonly color : string;
    readonly fontColor : string;
    readonly createDate : Date;
    readonly baseTypeId : number;
    readonly orderNum : number;
}

export const CREATE_SUBTYPE_OUTBOUND_PORT = 'CREATE_SUBTYPE_OUTBOUND_PORT' as const;

export interface CreateSubtypeOutboundPort {
    createInit(data : SubtypeInit) : Promise<ReturnSubtype>
}