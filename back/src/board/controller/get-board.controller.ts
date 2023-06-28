import { Controller, Get, Inject, Param } from "@nestjs/common";
import { FIND_BOARD_INBOUND_PORT, FindBoardInboundPort, ResultBoard } from "../inbound-port/find-board.inbound-port";

@Controller('iuni_board')
export class GetBoardController {
    constructor(
        @Inject(FIND_BOARD_INBOUND_PORT)
        private readonly findBoardInboundPort : FindBoardInboundPort
    ){}
    
    @Get('/:projectId')
    async loadBoardByProjectId(@Param('projectId') param : number) : Promise<ResultBoard[]>{
        return this.findBoardInboundPort.loadBoardByProjectId(param);
    }

}