import { CustomRepository } from "src/typeorm-ex.decorator";
import { Board } from "./board.entity";
import { Repository } from "typeorm";
import { CreateBoard } from "./outbound-port/create-board.outbound-port";
import { makeUpdateQuery } from "src/theme/module/theme.module";
import { UpdateBoard } from "./outbound-port/update-board.outbound-port";

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
    
    async UpdateBoard(data : UpdateBoard) : Promise<boolean> {
        try{
            const result = await this.createQueryBuilder()
                            .update(Board)
                            .set(makeUpdateQuery(data))
                            .where("id = :id" , { id : data.id})
                            .execute();
            
            return result.affected === 1 ? true : false;
        }
        catch(e){
            throw e;
        }
    }

    async GetBoardById(param : number) : Promise<Board>{
        try{
            return await this.findOne({
                where : {
                    id : param
                }
            });
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

    async Remove(param : number) : Promise<boolean> {
        try{
            const result = await this.delete(param);
            return result.affected === 1 ? true : false;
        }
        catch(e){
            throw e;
        }
    }
}