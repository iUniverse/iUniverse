import { Inject } from "@nestjs/common";
import { REMOVE_SUBTYPE_OUTBOUND_PORT, RemoveSubtypeOutboundPort, RemoveSubtypeResult } from "../outbound-port/delete-subtype.outbound-port";

export class RemoveSubtypeService implements RemoveSubtypeOutboundPort{
    constructor(
        @Inject(REMOVE_SUBTYPE_OUTBOUND_PORT)
        private readonly removeSubtypeOutboundPort : RemoveSubtypeOutboundPort
    ){}

    async remove(param : number) : Promise<RemoveSubtypeResult>{
        return this.removeSubtypeOutboundPort.remove(param);
    }
}