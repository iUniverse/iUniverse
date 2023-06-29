import { Inject } from '@nestjs/common';
import { LoadTaskInboundPort, LoadTaskInboundPortOutputDto, LoadByDateInboundPort } from '../inbound-port/load-task.inbound-port';
import { LoadTaskOutboundPort, LOAD_TASK_OUTBOUND_PORT, LoadTaskOPInputDto, LoadByDateOPInputDto, LoadByDateboundPort, LoadByDateOPOutputDto } from '../outbound-port/load-task.outbound-port';

export class LoadTaskService implements LoadTaskInboundPort, LoadByDateInboundPort {
    constructor(
        @Inject(LOAD_TASK_OUTBOUND_PORT)
        private readonly loadTaskOutboundPort: LoadTaskOutboundPort,

        @Inject(LOAD_TASK_OUTBOUND_PORT)
        private readonly loadByDateOutboundPort: LoadByDateboundPort
    ){}

    async load(param : LoadTaskOPInputDto): Promise<LoadTaskInboundPortOutputDto>{
        return this.loadTaskOutboundPort.load(param);
    }   

    async loadByDate(param : LoadByDateOPInputDto): Promise<LoadByDateOPOutputDto>{
        return this.loadByDateOutboundPort.loadByDate(param);
    }
}
