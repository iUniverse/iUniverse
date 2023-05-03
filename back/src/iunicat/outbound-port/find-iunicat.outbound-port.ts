export type FindIuniCatOPInputDto = {
    userId : number    
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
}

export const FIND_IUNICAT_OUTBOUND_PORT = 'FIND_IUNICAT_OUTBOUND_PORT' as const;

export interface FindIuniCatOutboundPort{
    find(param : FindIuniCatOPInputDto) : Promise<FindIuniCatOPOutputDto>
}
