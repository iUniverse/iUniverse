import { IsNotEmpty } from "class-validator";

export class CreateIuniCatDto {
    @IsNotEmpty()
    name : string
}

export type CreateInitDto = {
    userId : number;    
}

