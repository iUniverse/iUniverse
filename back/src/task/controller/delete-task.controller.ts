import { Controller, Delete, Inject, Param } from '@nestjs/common';
import { DeleteTaskInboundPort, DeleteTaskInboundPortInputDto, DeleteTaskInboundPortOutputDto, DELETE_TASK_INBOUND_PORT } from '../inbound-port/delete-task.inbound-port';

@Controller('iuni_task')
export class DeleteTaskController {
    constructor(
        @Inject(DELETE_TASK_INBOUND_PORT)
        private readonly deleteTaskInboundPort: DeleteTaskInboundPort
    ){}

    @Delete('/:id')
    async delete(@Param('id') taskId: DeleteTaskInboundPortInputDto):Promise<DeleteTaskInboundPortOutputDto>{
        return this.deleteTaskInboundPort.delete(taskId);
    }
}
