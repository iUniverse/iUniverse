import { IsNotEmpty } from "class-validator";

export class UpdateIuniCatIPInputDto{
    @IsNotEmpty()
    id : number;
    @IsNotEmpty()
    key : string;
    @IsNotEmpty()
    value : string;
}

export class UpdateIuniCatIPOutputDto{
    result : boolean;
}

export const UPDATE_IUNICAT_INBOUND_PORT = 'UPDATE_IUNICAT_INBOUND_PORT' as const;

export interface UpdateIuniCatInboundPort {
    update(params : UpdateIuniCatIPInputDto) : Promise<UpdateIuniCatIPOutputDto>;
}