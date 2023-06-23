import { Body, Controller, Inject, Patch, UsePipes, ValidationPipe } from "@nestjs/common";
import { UPDATE_THEME_INBOUND_PORT, UpdateThemeIPInputDto, UpdateThemeIPOutputDto, UpdateThemeInboundPort } from "../inbound-port/update-theme.inbound-port";

@Controller('iuni_theme')
export class PatchThemeController {
    constructor(
        @Inject(UPDATE_THEME_INBOUND_PORT)
        private readonly updateThemeInboundPort : UpdateThemeInboundPort,
    ){}
    
    @Patch('/')
    @UsePipes(ValidationPipe)
    async update(@Body() updateTheme : UpdateThemeIPInputDto) : Promise<UpdateThemeIPOutputDto>{
        return this.updateThemeInboundPort.update(updateTheme);
    }
    
}