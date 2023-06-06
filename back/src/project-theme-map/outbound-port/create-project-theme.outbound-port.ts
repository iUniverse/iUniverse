export type CreateProjectThemeOPInputDto = {
    projectId : number;
    themeId : number;
    userId : number;
    isUse : boolean;
}

export type CreateProjectThemeOPOutputDto = {
    projectId : number;
    themeId : number;
    userId : number;
    isUse : boolean;
}

export const CREATE_PROJECT_THEME_OUTBOUND_PORT = 'CREATE_PROJECT_THEME_OUTBOUND_PORT' as const;

export interface CreateProjectThemeOutboundPort{
    create(params : CreateProjectThemeOPInputDto) : Promise<CreateProjectThemeOPOutputDto>
}


