import { Injectable } from "@nestjs/common";
import { FindBoardTaskMapOutboundPort } from "../outbound-port/find-board-task-map.outbound-port";
import { BoardTaskMapRepository } from "../board-task-map.repository";

@Injectable()
export class FindBoardTaskMapRepository implements FindBoardTaskMapOutboundPort{
    constructor(
        private readonly findBoardTaskMapRepo : BoardTaskMapRepository
    ){}

    async loadByBoardId(param: number): Promise<any> {
        return await this.findBoardTaskMapRepo.LoadByBoardId(param);
    }
}