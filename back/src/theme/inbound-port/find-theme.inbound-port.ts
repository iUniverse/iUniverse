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
    //즐겨찾기 배경화면 색상코드들
    favoriteBColors : string[];
    //즐겨찾기 뱃지 컬러
    favoriteBadgeColor : string[];
    //즐겨찾기 글자 색상
    favoriteTColor : string;
    //배너 배경색
    bannerBC : string;
    //배너 글자 색상
    bannerTColor : string;
    //배너 뱃지 컬러
    bannerBadgeColor : string[];
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