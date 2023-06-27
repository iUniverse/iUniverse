import { Inject } from "@nestjs/common";
import { CreateBoardTaskMap, CreateBoardTaskMapInboundPort, ResultCreateBoardTaskMap } from "../inbound-port/create-board-task-map.inbound-port";
import { CREATE_BOARD_TASK_MAP_OUTBOUND_PORT, CreateBoardTaskMapOutboundPort } from "../outbound-port/create-board-task-map.outbound-port";

export class CreateBoardTaskMapService implements CreateBoardTaskMapInboundPort{
    constructor(
        @Inject(CREATE_BOARD_TASK_MAP_OUTBOUND_PORT)
        private readonly createBoardTaskMapOutboundPort : CreateBoardTaskMapOutboundPort
    ){}

    async create(param : CreateBoardTaskMap) : Promise<ResultCreateBoardTaskMap>{
        return this.createBoardTaskMapOutboundPort.create(param);
    }
}