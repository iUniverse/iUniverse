import { IsNotEmpty } from "class-validator";

export class loadThemeIPInputDto{
    @IsNotEmpty()
    userId : number; 
}

// export class loadThemeIPOutputDto = {
//     'value' : Array<FindThemeDto>    
// }
