import { Body, Controller, Get, Inject, Param } from '@nestjs/common';

import { FIND_THEME_INBOUND_PORT, FindThemeIPInputDto, FindThemeIPOutputDto, FindThemeInboundPort, LoadThemeIPOutputDto } from '../inbound-port/find-theme.inbound-port';

@Controller('iuni_theme')
export class GetThemeController {
    constructor(
        @Inject(FIND_THEME_INBOUND_PORT)
        private readonly findThemeInboundPort : FindThemeInboundPort,
    ){}

    @Get('/themes/:id')
    async find(@Param() param : FindThemeIPInputDto):Promise<FindThemeIPOutputDto>{   
        return this.findThemeInboundPort.find(param);
    }

    @Get('/mytheme')
    async findMyTheme(@Param() param : FindThemeIPInputDto) : Promise<FindThemeIPOutputDto>{
        return this.findThemeInboundPort.findMyTheme(param);
    }

    @Get('/')
    async load() : Promise<LoadThemeIPOutputDto>{
        try{
            return this.findThemeInboundPort.load();
        }
        catch(e){
            throw e;
        }
    }

    @Get('/init/:name')
    async checkInit(@Param() param : FindThemeIPInputDto) : Promise<boolean>{
        param.userId = 0;
        return this.findThemeInboundPort.checkInit(param);
    }
}