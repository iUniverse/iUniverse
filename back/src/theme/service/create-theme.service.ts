import {Body, Inject, UsePipes, ValidationPipe} from '@nestjs/common';
import { CreateThemeInboundPort, CreateThemeIPInputDto, CreateThemeIPOutputDto} from '../inbound-port/create-theme.inbound-port';
import { CREATE_THEME_OUTBOUND_PORT, CreateThemeOutboundPort } from '../outbound-port/create-theme.outbound-port';


export class CreateThemeService implements CreateThemeInboundPort{
    constructor(
        @Inject(CREATE_THEME_OUTBOUND_PORT)
        private readonly createThemeOutboundPort : CreateThemeOutboundPort
    ){}
    
    @UsePipes(ValidationPipe)
    async create(@Body() theme : CreateThemeIPInputDto) : Promise<CreateThemeIPOutputDto>{
        return this.createThemeOutboundPort.create(theme);
    }

    
}
