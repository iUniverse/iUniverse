import { Inject } from '@nestjs/common';
import { LoadTaskInboundPort, LoadTaskInboundPortOutputDto } from '../inbound-port/load-task.inbound';
import { LoadTaskOutboundPort, LOAD_TASK_OUTBOUND_PORT } from '../outbound-port/load-task.outbound-port';

export class LoadTaskService implements LoadTaskInboundPort {
    constructor(
        @Inject(LOAD_TASK_OUTBOUND_PORT)
        private readonly loadTaskOutboundPort: LoadTaskOutboundPort
    ){}

    async load(): Promise<LoadTaskInboundPortOutputDto>{
        return this.loadTaskOutboundPort.load();
    }
}
