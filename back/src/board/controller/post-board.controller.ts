import { Body, Controller,Post, Inject, UsePipes, ValidationPipe } from "@nestjs/common";
import { CREATE_BOARD_INBOUND_PORT, CreateBoard, CreateBoardInboundPort, InitCreateBoard, ResultCreateBoard, ResultInitCreateBoard } from "../inbound-port/create-board.inbound-port";

@Controller('iuni_board')
export class PostBoardController{
    constructor(
        @Inject(CREATE_BOARD_INBOUND_PORT)
        private readonly createBoardInboundPort : CreateBoardInboundPort
    ){};

    @Post('/')
    @UsePipes(ValidationPipe)
    async create(@Body() board : CreateBoard) : Promise<ResultCreateBoard> {
        try{
            return await this.createBoardInboundPort.create(board);
        }
        catch(e) {
            console.log(e);
            throw Error(e);
        }
    }

    @Post('/init')
    async createInit(@Body() data : InitCreateBoard) : Promise<ResultInitCreateBoard>{
        try{
            return await this.createBoardInboundPort.createInit(data)
        }
        catch(e) {
            console.log(e);
            throw Error(e);
        }
    }
}