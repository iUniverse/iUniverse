import { Controller, Get, Inject, Param, UsePipes, ValidationPipe } from "@nestjs/common";
import { Basetype, FIND_BASETYPE_INBOUND_PORT, FindBasetypeInboundPort, ReturnCheckInit } from "../inbound-port/find-basetype.inbound-port";

@Controller('iuni_basetype')
export class GetBasetypeController{
    constructor(
        @Inject(FIND_BASETYPE_INBOUND_PORT)
        private readonly findBasetypeInboundPort : FindBasetypeInboundPort
    ){}

    @Get('/:projectId')
    async loadProjectBasetype(@Param('projectId') param : number) : Promise<Basetype[]> {
        try{
            return this.findBasetypeInboundPort.loadProjectBasetype(param);
        }
        catch(e) {
            throw e;
        }
    }

    @Get('/basetype/:projectId/:name')
    async findBasetypeByName(@Param('projectId') projectId :number, @Param('name') name : string) : Promise<Basetype> {
        try{
            return this.findBasetypeInboundPort.findBasetypeByName(projectId, name);
        }
        catch(e) {
             throw e;
        }
    }

    @Get('/init/:projectId')
    async checkInit(@Param('projectId') param : number) : Promise<ReturnCheckInit[]>{
        try{
            return this.findBasetypeInboundPort.checkInit(param);
        }
        catch(e){
            throw e;
        }       
    }
}