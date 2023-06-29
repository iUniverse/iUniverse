import { Controller, Get, Inject, Param } from "@nestjs/common";
import { FIND_BOARD_TASK_MAP_INBOUND_PORT, FindBoardTaskMapInboundPort, ResultLoadTaskByBoardId } from "../inbound-port/find-board-task-map.inbound-port";

@Controller('iuni_board_task_map')
export class GetBoardTaskMapController {
    constructor(
        @Inject(FIND_BOARD_TASK_MAP_INBOUND_PORT)
        private readonly findBoardTaskMapInboundPort : FindBoardTaskMapInboundPort
    ){}

    @Get('/byboardid/:boardId')
    async loadByBoardId(@Param('boardId') param : number) : Promise<ResultLoadTaskByBoardId>{
        try{
            return this.findBoardTaskMapInboundPort.loadByBoardId(param);
        }
        catch(e){
            console.log(e);
            throw e;
        }
    }
}