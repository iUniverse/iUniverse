import { Injectable } from "@nestjs/common";
import { CreateBoardOutboundPort, ResultCreateBoard } from "../outbound-port/create-board.outbound-port";
import { CreateBoard } from "../inbound-port/create-board.inbound-port";
import { BoardRepository } from "../board.repository";

@Injectable()
export class CreateBoardRepository implements CreateBoardOutboundPort{
    constructor(
        private readonly createBoardRepo : BoardRepository
    ){}

    async create(data : CreateBoard) : Promise<ResultCreateBoard>{
        const result = await this.createBoardRepo.Create(data);
        
        return {
            'id' : result.id,
            'name' : result.name,
            'createDate' : result.createDate,
            'projectId' : result.projectId
        };
    }
}