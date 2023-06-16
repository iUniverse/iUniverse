import { Body, Controller, Inject, Post } from "@nestjs/common";
import { CREATE_BASETYPE_INBOUND_PORT, ReturnBaseType, CreateBasetypeInboundPort, BaseTypeInit } from "../inbound-port/create-basetype.inbound-port";

@Controller('iuni_basetype')
export class PostBaseTypeController{
    constructor(
        @Inject(CREATE_BASETYPE_INBOUND_PORT)
        private readonly createBaseTypeInboundPort : CreateBasetypeInboundPort
    ){}

    @Post('/init')
    async createInit(@Body() initData : BaseTypeInit) : Promise<ReturnBaseType>{
        try{
            return await this.createBaseTypeInboundPort.createInit(initData);
        }
        catch(e){
            console.log(e);
            throw Error(e);
        }
    }
}