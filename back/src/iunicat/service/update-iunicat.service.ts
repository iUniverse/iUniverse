import { Inject } from "@nestjs/common";
import { UPDATE_IUNICAT_OUTBOUND_PORT, UpdateIuniCatOutboundPort } from "../outbound-port/update-iunicat.outbound-port";
import { UpdateIuniCatIPInputDto, UpdateIuniCatIPOutputDto, UpdateIuniCatInboundPort } from "../inbound-port/update-iunicat.inbound-port";

export class UpdateIuniCatService implements UpdateIuniCatInboundPort{
    constructor(
        @Inject(UPDATE_IUNICAT_OUTBOUND_PORT)
        private readonly updateIuniCatOutboundPort : UpdateIuniCatOutboundPort
    ){}
    
    async update(param: UpdateIuniCatIPInputDto) : Promise<UpdateIuniCatIPOutputDto>{
        return this.updateIuniCatOutboundPort.update(param);
    }
} 