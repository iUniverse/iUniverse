export type CreateIuniCatOPInputDto = {
    name : string;
    leftEye : string;
    leftEyeWhite : string;
    rightEye : string;
    rightEyeWhite : string;
    nose : string;
    body : string;
    background : string;    
}

export type CreateIuniCatOPOutputDto = {
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

export const CREATE_IUNICAT_OUTBOUND_PORT = 'CREATE_IUNICAT_OUTBOUND_PORT' as const;

export interface CreateIuniCatOutboundPort{
    create(param : CreateIuniCatOPInputDto) : Promise<CreateIuniCatOPOutputDto>
}
