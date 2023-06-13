import { IsNotEmpty } from "class-validator";

export class UpdateThemeIPInputDto {
    @IsNotEmpty()
    id : number;
    @IsNotEmpty()
    key : string;
    @IsNotEmpty()
    value : any;
}

export class UpdateThemeIPOutputDto {
    result : boolean;
}

export const UPDATE_THEME_INBOUND_PORT = 'UPDATE_THEME_INBOUND_PORT' as const;

export interface UpdateThemeInboundPort {
    update(
        params : UpdateThemeIPInputDto
    ) : Promise<UpdateThemeIPOutputDto>;
}