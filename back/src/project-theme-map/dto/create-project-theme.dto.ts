import { IsNotEmpty } from "class-validator";
export class CreateProjectThemeDto{
    @IsNotEmpty()
    projectId : number;

    @IsNotEmpty()
    themeId : number;
}