import { Inject } from "@nestjs/common";
import { UpdateAllStatus, UpdateTask, UpdateTaskInboundPort} from "../inbound-port/update-task.inbound-port";
import { UpdateTaskOutboundPort, UPDATE_TASK_OUTBOUND_PORT, ResultUpdateTask } from "../outbound-port/update-task.outboud-port";

export class UpdateTaskService implements UpdateTaskInboundPort{
    constructor(
        @Inject(UPDATE_TASK_OUTBOUND_PORT)
        private readonly updateTaskOutboundPort: UpdateTaskOutboundPort 
    ){}

    async update(data : UpdateTask) : Promise<ResultUpdateTask>{
        return await this.updateTaskOutboundPort.update(data);
    }

    async updateAllTaskByStatus(data: UpdateAllStatus): Promise<ResultUpdateTask> {
        return await this.updateTaskOutboundPort.updateAllTaskByStatus(data);
    }
}