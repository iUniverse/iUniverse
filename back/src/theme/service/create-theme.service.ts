import {Body, Inject, UsePipes, ValidationPipe} from '@nestjs/common';
import { CreateThemeInboundPort, CreateThemeIPInputDto, CreateThemeIPOutputDto} from '../inbound-port/create-theme.inbound-port';
import { CREATE_THEME_OUTBOUND_PORT, CreateThemeOutboundPort } from '../outbound-port/create-theme.outbound-port';
import { getInitTheme } from '../module/theme.init';

export class CreateThemeService implements CreateThemeInboundPort{
    constructor(
        @Inject(CREATE_THEME_OUTBOUND_PORT)
        private readonly createThemeOutboundPort : CreateThemeOutboundPort
    ){}
    
    @UsePipes(ValidationPipe)
    async create(@Body() theme : CreateThemeIPInputDto) : Promise<CreateThemeIPOutputDto>{
        return this.createThemeOutboundPort.create(theme);
    }

    @UsePipes(ValidationPipe)
    async createInit(@Body() theme : CreateThemeIPInputDto) : Promise<boolean>{
        
        const init_theme = getInitTheme(theme.name); 
        //현재 유저의 정보가 없기 때문에 0으로 설정 한다.
        init_theme['userId'] = 0;
        return this.createThemeOutboundPort.createInit(init_theme);
    }
}
