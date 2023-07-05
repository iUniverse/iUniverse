import { Injectable } from "@nestjs/common";
import { UpdateBoardTaskMap, UpdateBoardTaskMapOutboundPort } from "../outbound-port/update-board-task-map.outbound-port";
import { BoardTaskMapRepository } from "../board-task-map.repository";

@Injectable()
export class UpdateBoardTaskMapRepository implements UpdateBoardTaskMapOutboundPort{
    constructor(
        private readonly updateBoardTaskMapRepo : BoardTaskMapRepository
    ){}

    async updateBoardId(data : UpdateBoardTaskMap) : Promise<boolean>{
        return await this.updateBoardTaskMapRepo.UpdateBoardId(data);
    }
}