import { IsNotEmpty } from "class-validator";

export class FindIuniCatDto{
    @IsNotEmpty()
    id : number;
    name : string;
    leftEye : string;
    leftEyeWhite : string;
    rightEye : string;
    rightEyeWhite : string;
    nose : string;
    body : string;
    background : string;
}

export class CheckInitDto {
    userId: number;
}