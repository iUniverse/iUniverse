import { Inject } from "@nestjs/common";
import { FindBasetypeInboundPort } from "../inbound-port/find-basetype.inbound-port";
import { FIND_BASETYPE_OUTBOUND_PORT, FindBasetypeOutboundPort, ReturnCheckInit } from "../outbound-port/find-basetype.outbound-port";
import { getInitBaseType } from "../module/basetype.init";

export class FindBasetypeService implements FindBasetypeInboundPort{
    constructor(
        @Inject(FIND_BASETYPE_OUTBOUND_PORT)
        private readonly findBasetypeOutboundPort : FindBasetypeOutboundPort
    ){}
    
    /* default 값이 있는지 확인 */
    async checkInit(param : number) : Promise<ReturnCheckInit[]>{
        return new Promise(async (resolve) => {
            const init_basetypes = getInitBaseType(param);
            Promise.all([
                this.findBasetypeOutboundPort.checkInit(init_basetypes[0]),
                this.findBasetypeOutboundPort.checkInit(init_basetypes[1]),
                this.findBasetypeOutboundPort.checkInit(init_basetypes[2])
            ]).then((result : ReturnCheckInit[]) => resolve(result))
        })
    }

    async loadMyBaseType() {

    }
}