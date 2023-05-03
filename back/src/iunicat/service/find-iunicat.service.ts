import { Inject } from "@nestjs/common";
import { FindIuniCatIPInputDto, FindIuniCatIPOutputDto, FindIuniCatInboundPort } from "../inbound-port/find-iunicat.inbound-port";
import { FIND_IUNICAT_OUTBOUND_PORT, FindIuniCatOutboundPort } from "../outbound-port/find-iunicat.outbound-port";

export class FindIuniCatService implements FindIuniCatInboundPort{
    constructor(
        @Inject(FIND_IUNICAT_OUTBOUND_PORT)
        private readonly findIuniCatOutboundPort : FindIuniCatOutboundPort
    ){}
    
    async find(param: FindIuniCatIPInputDto) : Promise<FindIuniCatIPOutputDto>{
        return this.findIuniCatOutboundPort.find(param);
    }
} 