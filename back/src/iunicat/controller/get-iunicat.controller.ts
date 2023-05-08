import { Controller, Get, Inject, Param } from "@nestjs/common";
import { FindThemeIPInputDto } from "src/theme/inbound-port/find-theme.inbound-port";
import { CheckInitCatIPInputDto, FIND_IUNICAT_INBOUND_PORT, FindIuniCatIPOutputDto, FindIuniCatInboundPort } from "../inbound-port/find-iunicat.inbound-port";

@Controller('iuni_cat')
export class GetIuniCatController{
    constructor(
        @Inject(FIND_IUNICAT_INBOUND_PORT)
        private readonly findIuniCatInboundPort : FindIuniCatInboundPort 
    ){}

    @Get('/')
    async findMyCat() : Promise<FindIuniCatIPOutputDto>{
        const param = new CheckInitCatIPInputDto();
        param.userId = 0;

        return this.findIuniCatInboundPort.findMyCat(param);
    }

    @Get('/init')
    async checkInit() : Promise<boolean> {
        const param = new CheckInitCatIPInputDto();
        param.userId = 0;
        return this.findIuniCatInboundPort.checkInit(param);
    }
}