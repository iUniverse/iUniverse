import { Injectable } from "@nestjs/common";
import { UpdateBoard, UpdateBoardOutboundPort } from "../outbound-port/update-board.outbound-port";
import { BoardRepository } from "../board.repository";

@Injectable()
export class UpdateBoardRepository implements UpdateBoardOutboundPort{
    constructor(
        private readonly updateBoardRepo : BoardRepository
    ){}

    async update(data : UpdateBoard) :Promise<boolean>{
        return await this.updateBoardRepo.UpdateBoard(data);
    }
}