import { IsNotEmpty } from 'class-validator'

export class CreateThemeDto {
    //테마명
    @IsNotEmpty()
    name: string;
    otherName : string;
    //즐겨찾기 배경화면 색상코드들
    colors: string[];
    //즐겨찾기 글자 색상
    fontColor: string;
    //유저 아이디
    userId: number;
}