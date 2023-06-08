import { Controller, Get, Inject } from '@nestjs/common';
import { LoadTaskInboundPort, LoadTaskInboundPortOutputDto, LOAD_TASK_INBOUND_PORT } from '../inbound-port/load-task.inbound-port';

@Controller('iuni_task')
export class GetTaskController {
    constructor(
        @Inject(LOAD_TASK_INBOUND_PORT)
        private readonly loadTaskInboundPort: LoadTaskInboundPort
    ){}
    
    @Get('/')
    async load():Promise<LoadTaskInboundPortOutputDto>{
        return this.loadTaskInboundPort.load()
    }
}
