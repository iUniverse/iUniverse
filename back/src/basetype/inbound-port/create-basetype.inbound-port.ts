import { IsNotEmpty } from "class-validator";

export class BaseTypeInit{
    @IsNotEmpty()
    readonly projectId : number;
    @IsNotEmpty()
    readonly name : string;
}

export class ReturnBaseType{
    readonly id : number;
    readonly name : string;
    readonly description : string;
    readonly createDate : Date;
    readonly projectId: number;
}

export const CREATE_BASETYPE_INBOUND_PORT = 'CREATE_BASETYPE_INBOUND_PORT' as const;

export interface CreateBasetypeInboundPort{
    createInit(data : BaseTypeInit) : Promise<ReturnBaseType>;
}

