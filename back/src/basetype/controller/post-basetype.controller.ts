import { Body, Controller, Inject, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CREATE_BASETYPE_INBOUND_PORT, ReturnBaseType, CreateBasetypeInboundPort, BaseTypeInit } from "../inbound-port/create-basetype.inbound-port";

@Controller('iuni_basetype')
export class PostBasetypeController{
    constructor(
        @Inject(CREATE_BASETYPE_INBOUND_PORT)
        private readonly createBaseTypeInboundPort : CreateBasetypeInboundPort
    ){}
    // @Post('/')
    // async create(){
    //     return '엄'
    // }

    @Post('/init')
    @UsePipes(ValidationPipe)
    async createInit(@Body() initData : BaseTypeInit) : Promise<ReturnBaseType>{
        try{
            return await this.createBaseTypeInboundPort.createInit(initData);
        }
        catch(e){
            throw Error(e);
        }
    }
}