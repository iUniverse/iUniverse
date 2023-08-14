import { Inject } from "@nestjs/common";
import { ResultBoard, FindBoardInboundPort } from "../inbound-port/find-board.inbound-port";
import { FIND_BOARD_OUTBOUND_PORT, FindBoardOutboundPort } from "../outbound-port/find-board.outbound-port";

export class FindBoardService implements FindBoardInboundPort {
    constructor(
        @Inject(FIND_BOARD_OUTBOUND_PORT)
        private readonly findBoardOutboundPort : FindBoardOutboundPort
    ){}
    
    async getBoardById(param : number) : Promise<ResultBoard>{
        return this.findBoardOutboundPort.getBoardById(param);
    }

    async loadBoardByProjectId(param: number): Promise<ResultBoard[]> {
        return this.findBoardOutboundPort.loadBoardByProjectId(param);
    }
}