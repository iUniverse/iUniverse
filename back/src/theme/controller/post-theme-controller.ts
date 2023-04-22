import { Body, Controller, Inject, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { response } from "express";
import { CREATE_THEME_INBOUND_PORT, CreateThemeIPInputDto, CreateThemeInboundPort, CreateThemeIPOutputDto } from "../inbound-port/create-theme.inbound-port";

@Controller('iuni_theme')
export class PostThemeController{
    constructor(
        @Inject(CREATE_THEME_INBOUND_PORT)
        private readonly createThemeInboundPort : CreateThemeInboundPort
    ){}

    @Post('/')
    @UsePipes(ValidationPipe)
    async create(@Body() theme : CreateThemeIPInputDto) : Promise<CreateThemeIPOutputDto>{
        try{
            return await this.createThemeInboundPort.create(theme);
        }
        catch(e){
            console.log(e);
            throw Error(e);
        }
    }
}