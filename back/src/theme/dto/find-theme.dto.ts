import { IsNotEmpty } from 'class-validator'

export class FindThemeDto {
    //id
    @IsNotEmpty()
    id : number;
    //테마명
    name: string;
    //다른 테마명
    otherName : string;

    //즐겨찾기 배경화면 색상코드들
    colors: string[];
    //즐겨찾기 글자 색상
    fontColor: string;
    //유저 아이디
    userId: number;
}