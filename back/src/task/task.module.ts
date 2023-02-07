import { Module } from '@nestjs/common';
import {GetTaskController} from './controller/task.controller';
import { LOAD_TASK_INBOUND_PORT } from './inbound-port/load-task.inbound';
import { LoadTaskService } from './service/load-task.service';
@Module({
  providers: [{
      provide: LOAD_TASK_INBOUND_PORT,
      useClass: LoadTaskService
  }],
  controllers: [GetTaskController]
})
export class TaskModule {}


