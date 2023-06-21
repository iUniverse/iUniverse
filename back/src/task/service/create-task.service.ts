import { Inject } from '@nestjs/common';
import { CreateTaskInboundPort, CreateTaskInboundPortInputDto, CreateTaskInboundPortOutputDto } from '../inbound-port/create-task.inbound-port';
import { CREATE_TASK_OUTBOUND_PORT, CreateTaskOutboundPort} from '../outbound-port/create-task.outbound-port';

export class CreateTaskService implements CreateTaskInboundPort{
    constructor(
        @Inject(CREATE_TASK_OUTBOUND_PORT)
        private readonly createTaskOutboundPort: CreateTaskOutboundPort 
    ){}

    async create(taskInfo:CreateTaskInboundPortInputDto):Promise<CreateTaskInboundPortOutputDto>{
        
        return this.createTaskOutboundPort.create(taskInfo);
    }
}