import { Body, Controller, Inject, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateProjectThemeIPInputDto, CreateProjectThemeInboundPort } from "../inbound-port/create-project-theme.inbound-port";

@Controller('iuni_project_theme')
export class PorstProjectThemeController{
    constructor(
        @Inject()
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