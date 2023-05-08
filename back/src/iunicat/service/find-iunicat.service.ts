import { Inject } from "@nestjs/common";
import { CheckInitCatIPInputDto, FindIuniCatIPInputDto, FindIuniCatIPOutputDto, FindIuniCatInboundPort } from "../inbound-port/find-iunicat.inbound-port";
import { CheckInitCatOPInputDto, FIND_IUNICAT_OUTBOUND_PORT, FindIuniCatOutboundPort } from "../outbound-port/find-iunicat.outbound-port";

export class FindIuniCatService implements FindIuniCatInboundPort{
    constructor(
        @Inject(FIND_IUNICAT_OUTBOUND_PORT)
        private readonly findIuniCatOutboundPort : FindIuniCatOutboundPort
    ){}
    
    async findMyCat(param: FindIuniCatIPInputDto) : Promise<FindIuniCatIPOutputDto>{
        return this.findIuniCatOutboundPort.findMyCat(param);
    }

    async checkInit(param : CheckInitCatOPInputDto) : Promise<boolean> {
        return this.findIuniCatOutboundPort.checkInit(param);      
    }
} 