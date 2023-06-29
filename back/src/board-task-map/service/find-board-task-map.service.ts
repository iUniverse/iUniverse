import { Inject } from "@nestjs/common";
import { FindBoardTaskMapInboundPort, ResultLoadTaskByBoardId } from "../inbound-port/find-board-task-map.inbound-port";
import { FIND_BOARD_TASK_MAP_OUTBOUND_PORT, FindBoardTaskMapOutboundPort } from "../outbound-port/find-board-task-map.outbound-port";

export class FindBoardTaskMapService implements FindBoardTaskMapInboundPort{
    constructor(
        @Inject(FIND_BOARD_TASK_MAP_OUTBOUND_PORT)
        private readonly findBoardTaskMapOutboundPort : FindBoardTaskMapOutboundPort
    ){}

    async loadByBoardId(param : number) : Promise<any> {
        const result_list = await this.findBoardTaskMapOutboundPort.loadByBoardId(param);
        
        const return_value = [];
    
        for(const result of result_list){
            return_value.push({
                'id' : result.task.id,
                'name' : result.task.name,
                'description' : result.task.description,
                'startDate' : result.task.startDate,
                'dueDate' : result.task.dueDate,
                'completionDate' :result.task.completionDate,
                'score' : result.task.score,
                'statusId' : result.task.statusId,
                'typeId' : result.task.typeId,
                'projectId' : result.task.projectId
            });
            
        }
        return return_value;
    }
}