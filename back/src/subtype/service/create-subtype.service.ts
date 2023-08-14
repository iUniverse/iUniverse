import { Inject } from "@nestjs/common";
import { CreateSubtypeInboundPort, ReturnSubtype, SubtypeInit } from "../inbound-port/create-subtype.inbound-port";
import { CREATE_SUBTYPE_OUTBOUND_PORT, CreateSubtype, CreateSubtypeOutboundPort } from "../outbound-port/create-subtype.outbound-port";
import { loadInitSubType } from "../module/subtype";

export class CreateSubtypeService implements CreateSubtypeInboundPort {
    constructor(
        @Inject(CREATE_SUBTYPE_OUTBOUND_PORT)
        private readonly createSubtypeOutboundPort: CreateSubtypeOutboundPort
    ) { }
    
    async create(data : CreateSubtype) : Promise<ReturnSubtype> {
        return this.createSubtypeOutboundPort.create(data);
    }
    
    async createInit(data: SubtypeInit): Promise<ReturnSubtype[]> {
        return new Promise(async (resolve) => {
            const init_subtypes = await loadInitSubType(data);
            const funcs = [];

            for (const init_subtype of init_subtypes) {
                
                funcs.push(this.createSubtypeOutboundPort.createInit(init_subtype))
            }

            Promise.all(funcs).then((result : ReturnSubtype[]) => resolve(result))
        });
    }
}