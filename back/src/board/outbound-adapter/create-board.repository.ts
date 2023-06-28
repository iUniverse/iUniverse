import { Injectable } from "@nestjs/common";
import { CreateBoard, CreateBoardOutboundPort, InitCreateBoard, ResultCreateBoard, ResultInitCreateBoard } from "../outbound-port/create-board.outbound-port";

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
            'projectId' : result.projectId,
            'color' : result.color,
            'fontColor' : result.fontColor,
            'orderNum' : result.orderNum,
        };
    }

    async createInit(data : CreateBoard) : Promise<any>{
        const result = await this.createBoardRepo.Create(data);
        return result
    }
}