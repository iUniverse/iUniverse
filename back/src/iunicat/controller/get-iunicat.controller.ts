import { Controller, Get, Param } from "@nestjs/common";
import { FindThemeIPInputDto } from "src/theme/inbound-port/find-theme.inbound-port";

@Controller('iuni_cat')
export class GetIuniCatController{
    constructor(
        
    ){}

    @Get('/:theme_id')
    async find(@Param() param : FindThemeIPInputDto){

    }
}