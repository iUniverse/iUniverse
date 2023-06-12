import { Controller, Get, Inject, Param } from '@nestjs/common';
import { LoadTaskInboundPort, LoadTaskInboundPortOutputDto, LOAD_TASK_INBOUND_PORT, LoadTaskIPInputDto } from '../inbound-port/load-task.inbound-port';

@Controller('iuni_task')
export class GetTaskController {
    constructor(
        @Inject(LOAD_TASK_INBOUND_PORT)
        private readonly loadTaskInboundPort: LoadTaskInboundPort
    ) {}

    @Get('/:id')
    async load(@Param() param: LoadTaskIPInputDto): Promise<LoadTaskInboundPortOutputDto> {
        try {
            console.log("애아니;ㅓ미나ㅓㅇ림나?");
            console.log(param);
            return this.loadTaskInboundPort.load(param);
        }
        catch (e) {
            console.log(e)
            throw e;
        }

    }
}
