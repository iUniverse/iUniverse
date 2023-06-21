import { Inject } from "@nestjs/common";
import { FIND_SUBTYPE_INBOUND_PORT, FindSubtypeInboundPort } from "../inbound-port/find-subtype.inbound-port";
import { FIND_SUBTYPE_OUTBOUND_PORT, FindSubtypeOutboundPort, Subtype } from "../outbound-port/find-subtype.outbound-port";

export class FindSubtypeService implements FindSubtypeInboundPort{
    constructor(
        @Inject(FIND_SUBTYPE_OUTBOUND_PORT)
        private readonly findSubtypeOutboundPort : FindSubtypeOutboundPort
    ){}

    async loadSubtype(param : number) :Promise<Subtype[]>{
        return this.findSubtypeOutboundPort.loadSubtype(param);
    }   
}