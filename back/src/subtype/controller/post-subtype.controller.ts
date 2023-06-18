import { Body, Controller, Inject, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CREATE_SUBTYPE_INBOUND_PORT, CreateSubtypeInboundPort, ReturnSubtype, SubtypeInit } from "../inbound-port/create-subtype.inbound-port";

@Controller('iuni_subtype')
export class PostSubtypeController{
    constructor(
        @Inject(CREATE_SUBTYPE_INBOUND_PORT)
        private readonly createSubtypeInboundPort : CreateSubtypeInboundPort
    ){}

    @Post('/init')
    @UsePipes(ValidationPipe)
    async createInit(@Body() initData : SubtypeInit) : Promise<ReturnSubtype>{
        try{
            return await this.createSubtypeInboundPort.createInit(initData);
        }
        catch(e){
            console.log(e);
            throw Error(e);
        }
    }
}