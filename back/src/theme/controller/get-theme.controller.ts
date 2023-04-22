import { Body, Controller, Get, Inject, Param } from '@nestjs/common';

import { FIND_THEME_INBOUND_PORT, FindThemeIPInputDto, FindThemeIPOutputDto, FindThemeInboundPort } from '../inbound-port/find-theme.inbound-port';

@Controller('iuni_theme')
export class GetProjectController {
    constructor(
        @Inject(FIND_THEME_INBOUND_PORT)
        private readonly findProjectInboundPort : FindThemeInboundPort
    ){}

    @Get('/:id')
    async find(@Param() param : FindThemeIPInputDto):Promise<FindThemeIPOutputDto>{   
        return this.findProjectInboundPort.find(param);
    }
}