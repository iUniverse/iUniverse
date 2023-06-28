import { CustomRepository } from "src/typeorm-ex.decorator";
import { Board } from "./board.entity";
import { Repository } from "typeorm";
import { CreateBoard } from "./outbound-port/create-board.outbound-port";

@CustomRepository(Board)
export class BoardRepository extends Repository<Board> {
    async Create(data : CreateBoard) : Promise<Board> {
        try{
            return await this.save(data);
        }
        catch(e){
            throw e;
        }
        
    }

    async LoadBoardByProjectId(param : number) : Promise<Board[]>{
        try{
            const result = await this.find({
                where : {
                    projectId : param
                },
                order : {
                    orderNum : "ASC"
                }
            });

            return result === null ? [] : result;
        }
        catch(e){
            throw e;
        }
    }
}