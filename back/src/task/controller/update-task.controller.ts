import { Body, Controller, Inject, Param, Put } from "@nestjs/common";
import { UpdateTaskDto } from "../dto/update-task.dto";
import { UpdateTaskInboundPort, UpdateTaskInboundPortInputDto, UpdateTaskInboundPortOutputDto, UPDATE_TASK_INBOUND_PORT } from "../inbound-port/update-task.inbound-port";

@Controller('iuni_task')
export class UpdateTaskController {
    constructor(
        @Inject(UPDATE_TASK_INBOUND_PORT)
        private readonly updateTaskInboundPort: UpdateTaskInboundPort
    ){}

    @Put('/:id')
    async delete( @Param('id')taskId: number, @Body() taskInfo: UpdateTaskInboundPortInputDto):Promise<UpdateTaskInboundPortOutputDto>{
        
        // if (taskId !== taskInfo.id){
        //     console.warn('수정하려는 태스크와 다릅니다.', taskId, taskInfo.id);
        //     return 'error';
        // }
        return this.updateTaskInboundPort.update(taskInfo);
    }
}