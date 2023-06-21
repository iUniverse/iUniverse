import { Controller, Get, Inject, Param } from "@nestjs/common";
import { FIND_SUBTYPE_INBOUND_PORT, FindSubtypeInboundPort, Subtype } from "../inbound-port/find-subtype.inbound-port";

@Controller('iuni_subtype')
export class GetSubtypeController{
    constructor(
        @Inject(FIND_SUBTYPE_INBOUND_PORT)
        private readonly findSubtypeInboundPort : FindSubtypeInboundPort
    ){}

    @Get('/:basetypeId')
    async loadSubtype(@Param('basetypeId') param : number)  : Promise<Subtype[]>{
        return this.findSubtypeInboundPort.loadSubtype(param);
    }
    
}