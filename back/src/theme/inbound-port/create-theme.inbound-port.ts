import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateThemeIPInputDto{
    //테마명
    @IsNotEmpty()
    readonly name : string;
    //즐겨찾기 배경화면 색상코드들
    @IsOptional()
    readonly favoriteBColors : string[];
    //즐겨찾기 글자 색상
    @IsOptional()
    readonly fontColor : string;
    //배너 배경색
    @IsOptional()
    readonly bannerBC : string;
    //유저 아이디
    @IsOptional()
    readonly userId : number;
}

export class CreateThemeIPOutputDto{
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

export const CREATE_THEME_INBOUND_PORT = 'CREATE_THEME_INBOUND_PORT' as const;

export interface CreateThemeInboundPort{
    create(params: CreateThemeIPInputDto) : Promise<CreateThemeIPInputDto>;
    
    createInit(params : CreateThemeIPInputDto) : Promise<boolean>;
}
