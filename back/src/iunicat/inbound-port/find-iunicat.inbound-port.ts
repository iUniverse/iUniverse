import { IsNotEmpty } from "class-validator";

export class FindIuniCatIPInputDto {
    @IsNotEmpty()
    theme_id : number;
}

export class FindIuniCatIPOutputDto {
    @IsNotEmpty()
    id : number;
    @IsNotEmpty()
    name : string;
    @IsNotEmpty()
    leftEye : string;
    @IsNotEmpty()
    leftEyeWhite : string;
    @IsNotEmpty()
    rightEye : string;
    @IsNotEmpty()
    rightEyeWhite : string;
    @IsNotEmpty()
    nose : string;
    @IsNotEmpty()
    body : string;
    @IsNotEmpty()
    background : string;
}