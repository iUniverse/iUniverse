import { IsNotEmpty } from "class-validator";

export class CreateProjectThemeIPInputDto{
    @IsNotEmpty()
    readonly projectId : number;
    @IsNotEmpty()
    readonly themeId : number;
    readonly isUse : boolean;
    readonly userId : number;
}

export class CreateProjectThemeIPOutputDto{
    @IsNotEmpty()
    readonly projectId : number;
    @IsNotEmpty()
    readonly themeId : number;
    readonly userId : number;
    readonly isUse : boolean;
}

export const CREATE_PROJECT_THEME_INBOUND_PORT = 'CREATE_PROJECT_THEME_INBOUND_PORT' as const;

export interface CreateProjectThemeInboundPort{
    create(param : CreateProjectThemeIPInputDto) : Promise<CreateProjectThemeIPOutputDto>;
}