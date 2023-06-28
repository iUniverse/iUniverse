import { Injectable } from "@nestjs/common";
import { BoardRepository } from "../board.repository";
import { ResultBoard } from "../inbound-port/find-board.inbound-port";
import { FindBoardOutboundPort } from "../outbound-port/find-board.outbound-port";

@Injectable()
export class FindBoardRepository implements FindBoardOutboundPort{
    constructor(
        private readonly findBoardRepo : BoardRepository
    ){}

    async loadBoardByProjectId(param : number) : Promise<ResultBoard[]>{
        try{
            return await this.findBoardRepo.LoadBoardByProjectId(param);
        }
        catch(e){
            console.log(e);
            throw e;
        }
    }

}