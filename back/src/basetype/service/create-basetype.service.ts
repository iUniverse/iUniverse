import { Inject } from "@nestjs/common";
import { CreateBasetypeInboundPort } from "../inbound-port/create-basetype.inbound-port";
import { CREATE_BASETYPE_OUTBOUND_PORT, CreateBasetypeOutboundPort } from "../outbound-port/create-basetype.outbound-port";
import { ReturnBasetype, BaseTypeInit } from "../outbound-port/create-basetype.outbound-port";
import { findInitBaseType } from "../module/basetype.init";

export class CreateBasetypeService implements CreateBasetypeInboundPort{
    constructor(
        @Inject(CREATE_BASETYPE_OUTBOUND_PORT)
        private readonly createBasetypeOutboundPort : CreateBasetypeOutboundPort
    ){}

    async createInit(data : BaseTypeInit) : Promise<ReturnBasetype>{
        // return new Promise(async (resolve) => {
        //     // const init_basetypes = await getInitBaseType(data.projectId);

        //     // Promise.all([
        //     //     this.createBasetypeOutboundPort.createInit(init_basetypes[0]),
        //     //     this.createBasetypeOutboundPort.createInit(init_basetypes[1]),
        //     //     this.createBasetypeOutboundPort.createInit(init_basetypes[2]),
        //     // ]).then((result : ReturnBasetype[]) => resolve(result))
        
        // })

        const init_basetype = await findInitBaseType(data);
        return await this.createBasetypeOutboundPort.createInit(init_basetype);
        
        // return this.createBasetypeOutboundPort.createInit();
    }
}