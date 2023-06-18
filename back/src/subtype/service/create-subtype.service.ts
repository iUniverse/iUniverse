import { Inject } from "@nestjs/common";
import { CreateSubtypeInboundPort, ReturnSubtype, SubtypeInit } from "../inbound-port/create-subtype.inbound-port";
import { CREATE_SUBTYPE_OUTBOUND_PORT, CreateSubtypeOutboundPort } from "../outbound-port/create-subtype.outbound-port";

export class CreateSubtypeService implements CreateSubtypeInboundPort{
    constructor(
        @Inject(CREATE_SUBTYPE_OUTBOUND_PORT)
        private readonly createSubtypeOutboundPort : CreateSubtypeOutboundPort
    ){}
    
    async createInit(data : SubtypeInit) : Promise<ReturnSubtype>{
        //const init_subtypes = await loadInitSubType(data);
        return this.createSubtypeOutboundPort.createInit();
    }
}