import { Body, Controller, Inject, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CREATE_PROJECT_THEME_INBOUND_PORT, CreateProjectThemeIPInputDto, CreateProjectThemeInboundPort } from "../inbound-port/create-project-theme.inbound-port";

@Controller('iuni_project_theme')
export class PostProjectThemeController{
    constructor(
        @Inject(CREATE_PROJECT_THEME_INBOUND_PORT)
        private readonly createProjectThemeInboundPort : CreateProjectThemeInboundPort
    ){};

    @Post('/')
    @UsePipes(ValidationPipe)
    async create(@Body() projectThemeMap : CreateProjectThemeIPInputDto){
        try{
            return await this.createProjectThemeInboundPort.create(projectThemeMap);
        }
        catch(e){         
            console.log(e);
            throw Error(e);
        }
    }
}