export type CreateProjectThemeOPInputDto = {
    projectId : number;
    themeId : number;
}

export type CreateProjectThemeOPOutputDto = {
    projectId : number;
    themeId : number;
}

export const CREATE_PROJECT_THEME_OUTBOUND_PORT = 'CREATE_PROJECT_THEME_OUTBOUND_PORT' as const;

export interface CreateProjectThemeOutboundPort{
    create(params : CreateProjectThemeOPInputDto) : Promise<CreateProjectThemeOPOutputDto>
}


