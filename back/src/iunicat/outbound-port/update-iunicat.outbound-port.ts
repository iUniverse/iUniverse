export type UpdateIuniCatOPInputDto = {
    id : number;
    key : string;
    value : string;
}

export type UpdateIuniCatOPOutputDto = {
    result : boolean;
}

export const UPDATE_IUNICAT_OUTBOUND_PORT = 'UPDATE_IUNICAT_OUTBOUND_PORT' as const;

export interface UpdateIuniCatOutboundPort{
    update(params : UpdateIuniCatOPInputDto,) : Promise<UpdateIuniCatOPOutputDto>;
}