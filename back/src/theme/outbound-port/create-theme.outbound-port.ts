export type CreateThemeOPInputDto = {
    //테마명
    readonly name : string;
    //즐겨찾기 배경화면 색상코드들
    readonly favoriteBColors : string[];
    //즐겨찾기 글자 색상
    readonly fontColor : string;
    //배너 배경색
    readonly bannerBC : string;
    //유저 아이디
    readonly userId : number;
}

export type CreateThemeOPOutputDto = {
    //테마명
    name : string;
    //즐겨찾기 배경화면 색상코드들
    favoriteBColors : string[];
    //즐겨찾기 글자 색상
    fontColor : string;
    //배너 배경색
    bannerBC : string;
    //유저 아이디
    userId : number;
}

export const CREATE_THEME_OUTBOUND_PORT = 'CREATE_THEME_OUTBOUND_PORT' as const;

export interface CreateThemeOutboundPort{
    create(params : CreateThemeOPInputDto) : Promise<CreateThemeOPOutputDto>;
    createInit(params : CreateThemeOPInputDto) : Promise<boolean>;
}