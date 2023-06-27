import { Body, Controller,Post, Inject, UsePipes } from "@nestjs/common";
import { CREATE_BOARD_INBOUND_PORT, CreateBoard, CreateBoardInboundPort, ResultCreateBoard } from "../inbound-port/create-board.inbound-port";

@Controller('iuni_board')
export class PostBoardController{
    constructor(
        @Inject(CREATE_BOARD_INBOUND_PORT)
        private readonly createBoardInboundPort : CreateBoardInboundPort
    ){};

    @Post('/')
    @UsePipes(ValidityState)
    async create(@Body() board : CreateBoard) : Promise<ResultCreateBoard> {
        try{
            return await this.createBoardInboundPort.create(board);
        }
        catch(e) {
            console.log(e);
            throw Error(e);
        }
    }
}