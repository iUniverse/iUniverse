import { Body, Controller, Inject, Patch, UsePipes, ValidationPipe } from "@nestjs/common";
import { ResultUpdateTask, UPDATE_TASK_INBOUND_PORT, UpdateTask, UpdateTaskInboundPort } from "../inbound-port/update-task.inbound-port";

@Controller('iuni_task')
export class PatchTaskController{
    constructor(
        @Inject(UPDATE_TASK_INBOUND_PORT)
        private readonly updateTaskInboundPort : UpdateTaskInboundPort
    ){}

    /* 
    2023-06-23 여기까지 함 
    태스트 업데이트 진행중
    */
    @Patch('/')
    @UsePipes(ValidationPipe)
    async update(@Body() data : UpdateTask) : Promise<ResultUpdateTask>{
        return this.updateTaskInboundPort.update(data);
    }
}