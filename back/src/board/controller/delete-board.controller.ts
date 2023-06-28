import { Controller, Inject, Delete, Param } from "@nestjs/common";
import { REMOVE_BOARD_INBOUND_PORT, RemoveBoardInboundPort } from "../inbound-port/remove-board.inbound-port";

@Controller('iuni_board')
export class DeleteBoardController{
    constructor(
        @Inject(REMOVE_BOARD_INBOUND_PORT)
        private readonly removeBoardInboundPort : RemoveBoardInboundPort
    ){}

    @Delete('/:id')
    async remove(@Param('id') param : number) : Promise<boolean>{
        return this.removeBoardInboundPort.remove(param)
    }
}