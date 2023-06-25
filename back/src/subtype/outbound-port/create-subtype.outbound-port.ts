import { IsNotEmpty } from "class-validator";

export type SubtypeInit = { 
    readonly name : string;
    readonly description : string;
    readonly color : string;
    readonly fontColor : string;
    readonly basetypeId : number;
    readonly orderNum : number;
    readonly defaultVal : boolean;
}

export type CreateSubtype = {
    readonly basetypeId : number;
    readonly name : string;
    readonly orderNum : number;
    readonly description : string;
    readonly color : string;
    readonly fontColor : string;
    readonly defaultVal : boolean;
}

export type ReturnSubtype = {
    readonly id : number;
    readonly name : string;
    readonly description : string;
    readonly color : string;
    readonly fontColor : string;
    readonly createDate : Date;
    readonly basetypeId : number;
    readonly orderNum : number;
    readonly defaultVal : boolean;
}

export const CREATE_SUBTYPE_OUTBOUND_PORT = 'CREATE_SUBTYPE_OUTBOUND_PORT' as const;

export interface CreateSubtypeOutboundPort {
    create(data : CreateSubtype) : Promise<ReturnSubtype>
    createInit(data : SubtypeInit) : Promise<ReturnSubtype>
}