import { Inject } from "@nestjs/common";
import { UpdateTaskInboundPort} from "../inbound-port/update-task.inbound-port";
import { UpdateTaskOutboundPort, UpdateTaskOutboundPortInputDto, UpdateTaskOutboundPortOutputDto, UPDATE_TASK_OUTBOUND_PORT } from "../outbound-port/update-task.outboud-port";

export class UpdateTaskService implements UpdateTaskInboundPort{
    constructor(
        @Inject(UPDATE_TASK_OUTBOUND_PORT)
        private readonly updateTaskOutboundPort: UpdateTaskOutboundPort 
    ){}

    async update(taskInfo: UpdateTaskOutboundPortInputDto):Promise<UpdateTaskOutboundPortOutputDto>{
        console.log('update task service');
        return await this.updateTaskOutboundPort.update(taskInfo);
    }
}