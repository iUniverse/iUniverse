export type CreateThemeOPInputDto = {
    //테마명
    readonly name : string;
    //즐겨찾기 배경화면 색상코드들
    readonly favoriteBColors : string[];
    //즐겨찾기 뱃지 컬러
    readonly favoriteBadgeColor : string[];
    //즐겨찾기 글자 색상
    readonly favoriteTColor : string;
    //배너 배경색
    readonly bannerBC : string;
    //배너 글자 색상
    readonly bannerTColor : string;
    //배너 뱃지 컬러
    readonly bannerBadgeColor : string[];
    //유저 아이디
    readonly userId : number;
}

export type CreateThemeOPOutputDto = {
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

export const CREATE_THEME_OUTBOUND_PORT = 'CREATE_THEME_OUTBOUND_PORT' as const;

export interface CreateThemeOutboundPort{
    create(params : CreateThemeOPInputDto) : Promise<CreateThemeOPOutputDto>;
}