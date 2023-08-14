import { CustomRepository } from "src/typeorm-ex.decorator";
import { Repository } from "typeorm";
import { BoardTaskMap } from "./board-task-map.entity";
import { CreateBoardTaskMap } from "./outbound-port/create-board-task-map.outbound-port";
import { UpdateBoardTaskMap } from "./outbound-port/update-board-task-map.outbound-port";

@CustomRepository(BoardTaskMap)
export class BoardTaskMapRepository extends Repository<BoardTaskMap>{
    
    async Create(data : CreateBoardTaskMap) : Promise<BoardTaskMap>{
        return await this.save(data);
    }


    async LoadByBoardId(param : number) : Promise<any> {
        const result = await this.find({ 
            relations : ['task'],
            where : { boardId : param}
        });
        return result;
    }  


    async UpdateBoardId(data : UpdateBoardTaskMap) : Promise<boolean> {
        
        const result = await this.createQueryBuilder()
                                .update(BoardTaskMap)
                                .set({'boardId' : data.updateBoardId})
                                .where('boardId =:boardId', {boardId : data.boardId})
                                .where('taskId =:taskId', { taskId : data.taskId})
                                .execute();
                                
        return result.affected > 0 ? true : false;
    }
}

