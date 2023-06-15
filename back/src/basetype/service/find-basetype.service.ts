import { Inject } from "@nestjs/common";
import { CheckInit, FindBasetypeInboundPort } from "../inbound-port/find-basetype.inbound-port";
import { FIND_BASETYPE_OUTBOUND_PORT, FindBasetypeOutboundPort } from "../outbound-port/find-basetype.outbound-port";

export class FindBasetypeService implements FindBasetypeInboundPort{
    constructor(
        @Inject(FIND_BASETYPE_OUTBOUND_PORT)
        private readonly findBasetypeOutboundPort : FindBasetypeOutboundPort
    ){}

    async checkInit(param : CheckInit) : Promise<boolean>{
        return this.findBasetypeOutboundPort.checkInit(param);
    }
}