import { Inject } from "@nestjs/common";
import { FindBoardTaskMapInboundPort, ResultLoadTaskByBoardId } from "../inbound-port/find-board-task-map.inbound-port";
import { FIND_BOARD_TASK_MAP_OUTBOUND_PORT, FindBoardTaskMapOutboundPort } from "../outbound-port/find-board-task-map.outbound-port";

export class FindBoardTaskMapService implements FindBoardTaskMapInboundPort{
    constructor(
        @Inject(FIND_BOARD_TASK_MAP_OUTBOUND_PORT)
        private readonly findBoardTaskMapOutboundPort : FindBoardTaskMapOutboundPort
    ){}

    /* param : boardId */
    async loadByBoardId(param : number) : Promise<any> {
        const result_list = await this.findBoardTaskMapOutboundPort.loadByBoardId(param);
        const return_value = {};
        const task_list = [];
        for(const result of result_list){
            task_list.push({
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
        
        return_value[param] = task_list; 
        return return_value;
    }
}