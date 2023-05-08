export type FindIuniCatOPInputDto = {
    userId : number;
}

export type FindIuniCatOPOutputDto = {
    id : number;
    name : string;
    leftEye : string;
    leftEyeWhite : string;
    rightEye : string;
    rightEyeWhite : string;
    nose : string;
    body : string;
    background : string;    
    createDate : Date;
}

export type CheckInitCatOPInputDto = {
    userId : number;
}



export const FIND_IUNICAT_OUTBOUND_PORT = 'FIND_IUNICAT_OUTBOUND_PORT' as const;

export interface FindIuniCatOutboundPort{
    findMyCat(param : FindIuniCatOPInputDto) : Promise<FindIuniCatOPOutputDto>

    checkInit(param : CheckInitCatOPInputDto) : Promise<boolean>
}
