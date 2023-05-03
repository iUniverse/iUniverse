import { IsNotEmpty } from "class-validator";

export class CreateIuniCatDto {
    @IsNotEmpty()
    name : string
}