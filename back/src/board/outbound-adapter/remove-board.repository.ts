import { BoardRepository } from "../board.repository";
import { Injectable } from "@nestjs/common";
import { RemoveBoardOutboundPort } from "../outbound-port/remove-board.outbound-port";

@Injectable()
export class RemoveBoardRepository implements RemoveBoardOutboundPort{
    constructor(
        private readonly removeBoardRepo : BoardRepository
    ){}

    async remove(param : number) : Promise<boolean>{
        return await this.removeBoardRepo.Remove(param);
    }
}