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
}

// export type FindProjectInboundPortOutputDto = FindProjectDto;

export const FIND_IUNICAT_INBOUND_PORT = 'FIND_IUNICAT_INBOUND_PORT' as const;

export interface FindIuniCatInboundPort{
    find(
        params : FindIuniCatIPInputDto,
    ): Promise<FindIuniCatIPOutputDto>;
}