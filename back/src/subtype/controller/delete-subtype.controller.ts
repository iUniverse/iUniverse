import { Controller, Delete, Inject, Param } from "@nestjs/common";
import { REMOVE_SUBTYPE_INBOUND_PORT, RemoveSubtypeInboundPort, RemoveSubtypeResult } from "../inbound-port/remove-subtype.inbound-port";

@Controller('iuni_subtype')
export class DeleteSubtypeController{
    constructor(
        @Inject(REMOVE_SUBTYPE_INBOUND_PORT)
        private readonly removeSubtypeInboundPort : RemoveSubtypeInboundPort
    ){}

    @Delete('/:id')
    async remove(@Param('id') param : number) : Promise<RemoveSubtypeResult> {
        return this.removeSubtypeInboundPort.remove(param);
    }
}