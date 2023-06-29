import { Inject } from "@nestjs/common";
import { FindBoardTaskMapInboundPort, ResultLoadTaskByBoardId } from "../inbound-port/find-board-task-map.inbound-port";
import { FIND_BOARD_TASK_MAP_OUTBOUND_PORT, FindBoardTaskMapOutboundPort } from "../outbound-port/find-board-task-map.outbound-port";

export class FindBoardTaskMapService implements FindBoardTaskMapInboundPort{
    constructor(
        @Inject(FIND_BOARD_TASK_MAP_OUTBOUND_PORT)
        private readonly findBoardTaskMapOutboundPort : FindBoardTaskMapOutboundPort
    ){}

    async loadByBoardId(param : number) : Promise<ResultLoadTaskByBoardId> {
        
        return this.findBoardTaskMapOutboundPort.loadByBoardId(param);
    }
}