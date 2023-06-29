import { Controller, Inject, ValidationPipe, Patch, UsePipes, Body } from "@nestjs/common";
import { UPDATE_BOARD_INBOUND_PORT, UpdateBoard, UpdateBoardInboundPort } from "../inbound-port/update-board.inbound-port";

@Controller('iuni_board')
export class PatchBoardController {
    constructor(
        @Inject(UPDATE_BOARD_INBOUND_PORT)
        private readonly updateBoardInboundPort: UpdateBoardInboundPort
    ){}

    @Patch('/')
    @UsePipes(ValidationPipe)
    async update(@Body() data : UpdateBoard) : Promise<boolean> {
        return this.updateBoardInboundPort.update(data);
    }
}