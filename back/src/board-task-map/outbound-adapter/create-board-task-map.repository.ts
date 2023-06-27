import { CreateBoardTaskMap, CreateBoardTaskMapOutboundPort, ResultCreateBoardTaskMap } from "../outbound-port/create-board-task-map.outbound-port";
import { Injectable } from "@nestjs/common";
import { BoardTaskMapRepository } from "../board-task-map.repository";

@Injectable()
export class CreateBoardTaskMapRepository implements CreateBoardTaskMapOutboundPort{
    constructor(
        private readonly createBoardTaskMapRepo : BoardTaskMapRepository
    ){}

    async create(data : CreateBoardTaskMap) : Promise<ResultCreateBoardTaskMap>{
        const result = await this.createBoardTaskMapRepo.Create(data);
        
        return {
            'id' : result.id,
            'boardId' : result.boardId,
            'taskId' : result.taskId
        };
    }
}