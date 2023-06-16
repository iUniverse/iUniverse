import { Controller, Get, Inject, Param } from '@nestjs/common';
import { LoadTaskInboundPort, LoadTaskInboundPortOutputDto, LOAD_TASK_INBOUND_PORT, LoadTaskIPInputDto, LoadByDateIPInputDto, LoadByDateInboundPort } from '../inbound-port/load-task.inbound-port';

@Controller('iuni_task')
export class GetTaskController {
    constructor(
        @Inject(LOAD_TASK_INBOUND_PORT)
        private readonly loadTaskInboundPort: LoadTaskInboundPort,

        @Inject(LOAD_TASK_INBOUND_PORT)
        private readonly loadByDateInboundPort: LoadByDateInboundPort
    ) {}

    @Get('/:id')
    async load(@Param('id') param: LoadTaskIPInputDto): Promise<LoadTaskInboundPortOutputDto> {
        try {
            console.log(param);
            return this.loadTaskInboundPort.load(param);
        }
        catch (e) {
            console.log(e)
            throw e;
        }
    }

    @Get('/search/date/:firstDate')
    async loadByDate(@Param() date: LoadByDateIPInputDto): Promise<LoadTaskInboundPortOutputDto> {
        try {
            return this.loadByDateInboundPort.loadByDate(date);
        }
        catch (e) {
            console.log(e)
            throw e;
        }

    }
}
