import { Inject } from '@nestjs/common';
import { DeleteTaskInboundPort, DeleteTaskInboundPortInputDto, DeleteTaskInboundPortOutputDto } from '../inbound-port/delete-task.inbound-port';
import { DeleteTaskOutboundPort, DELETE_TASK_OUTBOUND_PORT } from '../outbound-port/delete-task.outbound-port';

export class DeleteTaskService implements DeleteTaskInboundPort{
    constructor(
        @Inject(DELETE_TASK_OUTBOUND_PORT)
        private readonly deleteTaskOutboundPort: DeleteTaskOutboundPort 
    ){}

    async delete(taskInfo:DeleteTaskInboundPortInputDto):Promise<DeleteTaskInboundPortOutputDto>{
        console.log('delete task service');
        return this.deleteTaskOutboundPort.delete(taskInfo);
    }
}