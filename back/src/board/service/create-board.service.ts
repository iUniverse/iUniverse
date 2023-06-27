import { Inject } from "@nestjs/common";
import { CreateBoard, CreateBoardInboundPort, ResultCreateBoard } from "../inbound-port/create-board.inbound-port";
import { CREATE_BOARD_OUTBOUND_PORT, CreateBoardOutboundPort } from "../outbound-port/create-board.outbound-port";

export class CreateBoardService implements CreateBoardInboundPort{
    constructor(
        @Inject(CREATE_BOARD_OUTBOUND_PORT)
        private readonly createboardOutboundPort : CreateBoardOutboundPort
    ){}

    async create(data : CreateBoard) : Promise<ResultCreateBoard> {
        return this.createboardOutboundPort.create(data);
    }
}