import { IsNotEmpty } from "class-validator";

export class DeleteProjectThemeIPInputDto {
    @IsNotEmpty()
    projectId: number;
    @IsNotEmpty()
    themeId : number;
}

export class DeleteProjectThemeIPOutputDto {
    result : boolean;
}


