import { Module } from '@nestjs/common';
import { TypeOrmExModule } from 'src/typeorm-ex.module';
import {GetTaskController} from './controller/get-task.controller';
import { PostTaskController } from './controller/post-task.controller';
import { CREATE_TASK_INBOUND_PORT } from './inbound-port/create-task.inbound-port';
import { LOAD_TASK_INBOUND_PORT } from './inbound-port/load-task.inbound-port';
import { CreateTaskRepository } from './outbound-adapter/create-task.repository';
import { LoadTaskRepository } from './outbound-adapter/load-task.repository';
import { CREATE_TASK_OUTBOUND_PORT } from './outbound-port/create-task.outbound-port';
import { LOAD_TASK_OUTBOUND_PORT } from './outbound-port/load-task.outbound-port';
import { CreateTaskService } from './service/create-task.service';
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
    },
    {
      provide: CREATE_TASK_INBOUND_PORT,
      useClass: CreateTaskService
    },
    {
      provide: CREATE_TASK_OUTBOUND_PORT,
      useClass: CreateTaskRepository
    }
  ],
  controllers: [GetTaskController, PostTaskController]
})
export class TaskModule {

}


