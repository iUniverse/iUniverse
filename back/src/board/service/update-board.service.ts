import { Inject } from "@nestjs/common";
import { UpdateBoard, UpdateBoardInboundPort } from "../inbound-port/update-board.inbound-port";
import { UPDATE_BOARD_OUTBOUND_PORT, UpdateBoardOutboundPort } from "../outbound-port/update-board.outbound-port";

export class UpdateBoardService implements UpdateBoardInboundPort{
    constructor(
        @Inject(UPDATE_BOARD_OUTBOUND_PORT)
        private readonly updateBoardOutboundPort : UpdateBoardOutboundPort 
    ){}

    async update(data : UpdateBoard) : Promise<boolean>{
        return await this.updateBoardOutboundPort.update(data);
    }
}