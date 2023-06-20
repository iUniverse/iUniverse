import { IsNotEmpty } from "class-validator";
import { LargeNumberLike } from "crypto";

export class SubtypeInit{
    @IsNotEmpty()
    basetypeId : number;
    @IsNotEmpty()
    basetypeName : string;
}

export class ReturnSubtype{
    readonly id : number;
    readonly name : string;
    readonly description : string;
    readonly color : string;
    readonly fontColor : string;
    readonly createDate : Date;
    readonly basetypeId : number;
    readonly orderNum : number;
}

export const CREATE_SUBTYPE_INBOUND_PORT = 'CREATE_SUBTYPE_INBOUND_PORT' as const;

export interface CreateSubtypeInboundPort{
    createInit(data : SubtypeInit) : Promise<ReturnSubtype[]>
}