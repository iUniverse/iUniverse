import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { CreateTaskInboundPort, CreateTaskInboundPortInputDto, CreateTaskInboundPortOutputDto, CREATE_TASK_INBOUND_PORT } from '../inbound-port/create-task.inbound-port';

@Controller('iuni_task')
export class PostTaskController {
    constructor(
        @Inject(CREATE_TASK_INBOUND_PORT) //태스크 모듈에서 provide 설정해둔거 의존성 주입하는 부분
        private readonly createTaskInboundPort: CreateTaskInboundPort
    ){}

    @Post('/')
    async create(@Body() taskInfo: CreateTaskInboundPortInputDto):Promise<CreateTaskInboundPortOutputDto>{
        return this.createTaskInboundPort.create(taskInfo);
    }
}