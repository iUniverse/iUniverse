import { FindThemeDto } from "../dto/find-theme.dto";

export type FindThemeOPInputDto = { 
    userId : number,
    name : string,
    id : number,
};
export type FindThemeOPOutputDto = FindThemeDto;
export type LoadThemeOPOutputDto = { 'themeList' : Array<FindThemeDto>} 

export const FIND_THEME_OUTBOUND_PORT = 'FIND_THEME_OUTBOUND_PORT' as const;

export interface FindThemeOutboundPort{
    find(param: FindThemeOPInputDto) : Promise<FindThemeOPOutputDto>;

    checkInit(param : FindThemeOPInputDto) : Promise<boolean>;

    load() : Promise<LoadThemeOPOutputDto>;
}