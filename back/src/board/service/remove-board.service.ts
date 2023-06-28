import { Inject } from "@nestjs/common";
import { REMOVE_BOARD_OUTBOUND_PORT, RemoveBoardOutboundPort } from "../outbound-port/remove-board.outbound-port";

export class RemoveBoardService implements RemoveBoardOutboundPort{
    constructor(
        @Inject(REMOVE_BOARD_OUTBOUND_PORT)
        private readonly removeBoardOutboundPort : RemoveBoardOutboundPort
    ){}

    async remove(param : number) : Promise<boolean> {
        return this.removeBoardOutboundPort.remove(param);
    }
}