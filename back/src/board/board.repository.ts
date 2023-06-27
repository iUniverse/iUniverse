import { CustomRepository } from "src/typeorm-ex.decorator";
import { Board } from "./board.entity";
import { Repository } from "typeorm";
import { CreateBoard } from "./outbound-port/create-board.outbound-port";

@CustomRepository(Board)
export class BoardRepository extends Repository<Board> {
    async Create(data : CreateBoard) : Promise<Board> {
        return await this.save(data);
    }
}