import { Body, Controller, Inject, Patch, UsePipes, ValidationPipe } from "@nestjs/common";
import { ResultUpdateTask, UPDATE_TASK_INBOUND_PORT, UpdateAllStatus, UpdateTask, UpdateTaskInboundPort } from "../inbound-port/update-task.inbound-port";

@Controller('iuni_task')
export class PatchTaskController{
    constructor(
        @Inject(UPDATE_TASK_INBOUND_PORT)
        private readonly updateTaskInboundPort : UpdateTaskInboundPort
    ){}

    /* 
    테스크 정보 업데이트
    */
    @Patch('/')
    @UsePipes(ValidationPipe)
    async update(@Body() data : UpdateTask) : Promise<ResultUpdateTask>{
        return this.updateTaskInboundPort.update(data);
    }

    /* pastStatusId 와 관련된 모든 테스크 상태 변경*/
    @Patch('/allstatus')
    @UsePipes(ValidationPipe)
    async updateAllTaskByStatus(@Body() data : UpdateAllStatus) : Promise<ResultUpdateTask>{
        return this.updateTaskInboundPort.updateAllTaskByStatus(data);
    }
}