import { Controller, Inject, Get } from "@nestjs/common";
import { FindThemeIPInputDto, FindThemeIPOutputDto, FindThemeInboundPort } from "../inbound-port/find-theme.inbound-port";
import { FIND_THEME_OUTBOUND_PORT, FindThemeOPInputDto, FindThemeOPOutputDto, FindThemeOutboundPort } from "../outbound-port/find-theme.outbound-port";

@Controller('theme')
export class FindThemeService implements FindThemeInboundPort{
    constructor(
        @Inject(FIND_THEME_OUTBOUND_PORT)
        private readonly findThemeOutboundPort : FindThemeOutboundPort,
    ){}

    @Get('/:userId')
    async find(param : FindThemeOPInputDto): Promise<FindThemeOPOutputDto>{
        return this.findThemeOutboundPort.find(param);
    }

    @Get('/init/:userId')
    async findInit():Promise<boolean>{
        return true;
    }
}