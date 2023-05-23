import { IsNotEmpty } from 'class-validator'

export class FindThemeDto {
    //id
    @IsNotEmpty()
    id : number;
    //테마명
    name: string;
    //즐겨찾기 배경화면 색상코드들
    favoriteBColors: string[];
    //즐겨찾기 글자 색상
    fontColor: string;
    //배너 배경색
    bannerBC: string;
    //유저 아이디
    userId: number;
}