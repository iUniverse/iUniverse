import { Controller, Inject, Get } from "@nestjs/common";
import { FindThemeIPInputDto, FindThemeIPOutputDto, FindThemeInboundPort } from "../inbound-port/find-theme.inbound-port";
import { FIND_THEME_OUTBOUND_PORT, FindThemeOPInputDto, FindThemeOPOutputDto, FindThemeOutboundPort, LoadThemeOPOutputDto } from "../outbound-port/find-theme.outbound-port";


export class FindThemeService implements FindThemeInboundPort{
    constructor(
        @Inject(FIND_THEME_OUTBOUND_PORT)
        private readonly findThemeOutboundPort : FindThemeOutboundPort,
    ){}

    async find(param : FindThemeOPInputDto): Promise<FindThemeOPOutputDto>{
        param.userId = 0;
        return this.findThemeOutboundPort.find(param);
    }

    async load() : Promise<LoadThemeOPOutputDto>{
        return this.findThemeOutboundPort.load();
    }

    async checkInit(param: FindThemeOPInputDto):Promise<boolean>{
        
        return this.findThemeOutboundPort.checkInit(param);
    }
}