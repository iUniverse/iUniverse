import { Inject } from "@nestjs/common";
import { UPDATE_BOARD_TASK_MAP_OUTBOUND_PORT, UpdateBoardTaskMapOutboundPort } from "../outbound-port/update-board-task-map.outbound-port";
import { UpdateBoardTaskMap, UpdateBoardTaskMapInboundPort } from "../inbound-port/update-board-task-map.inbound-port";

export class UpdateBoardTaskMapService implements UpdateBoardTaskMapInboundPort{
    constructor(
        @Inject(UPDATE_BOARD_TASK_MAP_OUTBOUND_PORT)
        private readonly updateBoardTaskMapOutboundPort : UpdateBoardTaskMapOutboundPort
    ){}

    async updateBoardId(data : UpdateBoardTaskMap) : Promise<boolean>{
        return this.updateBoardTaskMapOutboundPort.updateBoardId(data);
    }
    
}