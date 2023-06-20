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
    //여기까지함
    @Get('/:projectId/:name')
    async findBasetypeByName(@Param('projectId') projectId :number, @Param('name') name : string) : Promise<Basetype> {
        try{
            console.log('엄;')
            console.log(projectId);
            console.log(name);
            console.log('wns')
            return this.findBasetypeInboundPort.findBasetypeByName(projectId, name);
        }
        catch(e) {
             throw e;
        }
    }

    @Get('/init/:projectId')
    async checkInit(@Param('projectId') param : number) : Promise<ReturnCheckInit[]>{
        try{
            console.log('요긴가');
            console.log(param);
            console.log('요기요');
            return this.findBasetypeInboundPort.checkInit(param);
        }
        catch(e){
            throw e;
        }       
    }
}