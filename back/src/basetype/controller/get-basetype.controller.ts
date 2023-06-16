import { Controller, Get, Inject, Param, UsePipes, ValidationPipe } from "@nestjs/common";
import { FIND_BASETYPE_INBOUND_PORT, FindBasetypeInboundPort, ReturnCheckInit } from "../inbound-port/find-basetype.inbound-port";

@Controller('iuni_basetype')
export class GetBasetypeController{
    constructor(
        @Inject(FIND_BASETYPE_INBOUND_PORT)
        private readonly findBasetypeInboundPort : FindBasetypeInboundPort
    ){}

    @Get('/init/:projectId')
    async checkInit(@Param('projectId') param : number) : Promise<ReturnCheckInit[]>{
        try{
            console.log("----------------dja-------------");
            console.log(param);
            return this.findBasetypeInboundPort.checkInit(param);
        }
        catch(e){
            throw e;
        }       
    }
}