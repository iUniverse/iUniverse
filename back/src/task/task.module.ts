import { Module } from '@nestjs/common';
import { TypeOrmExModule } from 'src/typeorm-ex.module';
import {GetTaskController} from './controller/task.controller';
import { LOAD_TASK_INBOUND_PORT } from './inbound-port/load-task.inbound';
import { LoadTaskRepository } from './outbound-adapter/load-task.repository';
import { LOAD_TASK_OUTBOUND_PORT } from './outbound-port/load-task.outbound-port';
import { LoadTaskService } from './service/load-task.service';
import { TaskRepository } from './task.repository';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([TaskRepository])],
  providers: [
    {
      provide: LOAD_TASK_INBOUND_PORT,
      useClass: LoadTaskService
    },
    {
      provide: LOAD_TASK_OUTBOUND_PORT,
      useClass: LoadTaskRepository
    }
  ],
  controllers: [GetTaskController]
})
export class TaskModule {

}


