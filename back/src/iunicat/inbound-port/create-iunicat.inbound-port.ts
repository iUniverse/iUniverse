import { IsNotEmpty } from "class-validator";

export class CreateIuniCatIPInputDto {
    @IsNotEmpty()
    name: string;
    leftEye : string;
    leftEyeWhite : string;
    rightEye : string;
    rightEyeWhite : string;
    nose : string;
    body : string;
    background : string;
}

export class CreateIuniCatIPOutputDto {
    id : number;
    name : string;
    leftEye : string;
    leftEyeWhite : string;
    rightEye : string;
    rightEyeWhite : string;
    nose : string;
    body : string;
    background : string;  
}

export const CREATE_IUNICAT_INBOUND_PORT = 'CREATE_IUNICAT_INBOUND_PORT' as const;

export interface CreateIuniCatInboundPort {
    create(params: CreateIuniCatIPInputDto): Promise<CreateIuniCatIPOutputDto>;
}