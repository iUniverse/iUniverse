export type UpdateThemeOPInputDto = {
    id : number;
    key : string;
    value : any;
}

export type UpdateThemeOPOutputDto = {
    result : boolean;
}

export const UPDATE_THEME_OUTBOUND_PORT = 'UPDATE_THEME_OUTBOUND_PORT' as const;

export interface UpdateThemeOutboundPort{
    update(
        params : UpdateThemeOPInputDto,
    ) : Promise<UpdateThemeOPOutputDto>;
}
