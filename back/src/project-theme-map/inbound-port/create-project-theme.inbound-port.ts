import { IsNotEmpty } from "class-validator";

export class CreateProjectThemeIPInputDto{
    @IsNotEmpty()
    readonly projectId : number;
    @IsNotEmpty()
    readonly themeId : number;
}

export class CreateProjectThemeIPOutputDto{
    @IsNotEmpty()
    readonly projectId : number;
    @IsNotEmpty()
    readonly themeId : number;
}

export const CREATE_PROJECT_THEME_INBOUND_PORT = 'CREATE_PROJECT_THEME_INBOUND_PORT' as const;

export interface CreateProjectThemeInboundPort{
    create(param : CreateProjectThemeIPInputDto) : Promise<CreateProjectThemeIPOutputDto>;
}