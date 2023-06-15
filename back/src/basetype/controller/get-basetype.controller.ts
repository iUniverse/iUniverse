import { Controller, Get, Inject, Param, UsePipes, ValidationPipe } from "@nestjs/common";
import { CheckInit, FIND_BASETYPE_INBOUND_PORT, FindBasetypeInboundPort } from "../inbound-port/find-basetype.inbound-port";

@Controller('iuni_basetype')
export class GetBasetypeController{
    constructor(
        @Inject(FIND_BASETYPE_INBOUND_PORT)
        private readonly findBasetypeInboundPort : FindBasetypeInboundPort
    ){}
    
    @Get('/init/:projectId')
    @UsePipes(ValidationPipe)
    async checkInit(@Param() param : CheckInit) : Promise<boolean>{
        return this.findBasetypeInboundPort.checkInit(param);
    }
}