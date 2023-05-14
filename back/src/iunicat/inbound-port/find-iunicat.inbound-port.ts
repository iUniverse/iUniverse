import { IsNotEmpty } from "class-validator";

export class FindIuniCatIPInputDto {
    userId : number;
}

export class FindIuniCatIPOutputDto {
    @IsNotEmpty()
    id : number;
    @IsNotEmpty()
    name : string;
    @IsNotEmpty()
    leftEye : string;
    @IsNotEmpty()
    leftEyeWhite : string;
    @IsNotEmpty()
    rightEye : string;
    @IsNotEmpty()
    rightEyeWhite : string;
    @IsNotEmpty()
    nose : string;
    @IsNotEmpty()
    body : string;
    @IsNotEmpty()
    background : string;
    createDate : Date;
}

export class CheckInitCatIPInputDto {
    @IsNotEmpty()
    userId : number;
}



export const FIND_IUNICAT_INBOUND_PORT = 'FIND_IUNICAT_INBOUND_PORT' as const;

export interface FindIuniCatInboundPort{
    findMyCat(param : FindIuniCatIPInputDto): Promise<FindIuniCatIPOutputDto>; 
    
    checkInit(params: CheckInitCatIPInputDto) : Promise<boolean>;
    
}