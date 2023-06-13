import { IsNotEmpty, IsOptional } from "class-validator";
import { FindThemeDto } from "../dto/find-theme.dto";

export class FindThemeIPInputDto{
    @IsOptional()
    id : number;
    @IsOptional()
    userId : number;
    @IsOptional() 
    name : string;
}

export class FindThemeIPOutputDto{
    //id
    @IsNotEmpty()
    id : number;
    //테마명
    name : string;
    //다른 테마명
    otherName : string;
    //즐겨찾기 배경화면 색상코드들
    colors : string[];
    //즐겨찾기 글자 색상
    fontColor : string;
    //유저 아이디
    userId : number;
}

export class LoadThemeIPOutputDto {
    'themeList' : Array<FindThemeDto>    
}

export const FIND_THEME_INBOUND_PORT =  'FIND_THEME_INBOUND_PORT' as const;

export interface FindThemeInboundPort{
    //특정 테마 정보 찾기
    find(params : FindThemeIPInputDto) : Promise<FindThemeIPOutputDto>

    //현재 나의 테마 보기
    findMyTheme(param : FindThemeIPInputDto) : Promise<FindThemeIPOutputDto>

    //테마 기본값 있는지 확인
    checkInit(params : FindThemeIPInputDto) : Promise<boolean>

    load() : Promise<LoadThemeIPOutputDto>;
}