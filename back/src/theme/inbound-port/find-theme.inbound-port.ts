import { IsNotEmpty } from "class-validator";

export class FindThemeIPInputDto{
    @IsNotEmpty()
    userId : number; 
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



export const FIND_THEME_INBOUND_PORT =  'FIND_THEME_INBOUND_PORT' as const;

export interface FindThemeInboundPort{
    find(
        params : FindThemeIPInputDto,
    ) : Promise<FindThemeIPOutputDto>;
}