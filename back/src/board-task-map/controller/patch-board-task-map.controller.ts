import { Body, Controller, Inject, Patch, UsePipes, ValidationPipe } from "@nestjs/common";
import { UPDATE_BOARD_TASK_MAP_INBOUND_PORT, UpdateBoardTaskMap, UpdateBoardTaskMapInboundPort } from "../inbound-port/update-board-task-map.inbound-port";

@Controller('iuni_board_task_map')
export class PatchBoardTaskMapController {
    constructor(
        @Inject(UPDATE_BOARD_TASK_MAP_INBOUND_PORT)
        private readonly updateBoardTaskMapInboundPort : UpdateBoardTaskMapInboundPort
    ){}

    @Patch('/')
    @UsePipes(ValidationPipe)
    async update(@Body() data : UpdateBoardTaskMap) : Promise<boolean>{
        return this.updateBoardTaskMapInboundPort.updateBoardId(data);
    }
}