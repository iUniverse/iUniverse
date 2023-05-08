import { Controller, Inject, Post } from "@nestjs/common";
import { CREATE_IUNICAT_INBOUND_PORT, CreateInitCatIPInputDto, CreateIuniCatIPOutputDto, CreateIuniCatInboundPort } from "../inbound-port/create-iunicat.inbound-port";

@Controller('iuni_cat')
export class PostIuniCatController{
    constructor(
        @Inject(CREATE_IUNICAT_INBOUND_PORT)
        private readonly createIuniCatInboundPort : CreateIuniCatInboundPort
    ){}

    @Post('/init')
    async createInit() : Promise<CreateIuniCatIPOutputDto>{
        const param = new CreateInitCatIPInputDto();
        param.userId = 0;
        return this.createIuniCatInboundPort.createInit(param);
    }
}

