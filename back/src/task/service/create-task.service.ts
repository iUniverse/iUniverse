import { Inject } from '@nestjs/common';
import { CreateTaskInboundPort, CreateTaskInboundPortOutputDto } from '../inbound-port/create-task.inbound-port';
import { CREATE_TASK_OUTBOUND_PORT, CreateTaskOutboundPort} from '../outbound-port/create-task.outbound-port';

export class CreateTaskService implements CreateTaskInboundPort{
    constructor(
        @Inject(CREATE_TASK_OUTBOUND_PORT)
        private readonly createTaskOutboundPort = CreateTaskOutboundPort ){}

    create():Promise<CreateTaskInboundPortOutputDto>{
        return this.createTaskOutboundPort.create();
    }
    // async load(): Promise<LoadTaskInboundPortOutputDto>{
        // return this.loadTaskOutboundPort.load();
    // }
}