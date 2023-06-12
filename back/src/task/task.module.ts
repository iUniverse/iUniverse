import { Module } from '@nestjs/common';
import { TypeOrmExModule } from 'src/typeorm-ex.module';
import { DeleteTaskController } from './controller/delete-task.controller';
import {GetTaskController} from './controller/get-task.controller';
import { PostTaskController } from './controller/post-task.controller';
import { UpdateTaskController } from './controller/update-task.controller';
import { CREATE_TASK_INBOUND_PORT } from './inbound-port/create-task.inbound-port';
import { DELETE_TASK_INBOUND_PORT } from './inbound-port/delete-task.inbound-port';
import { LOAD_TASK_INBOUND_PORT } from './inbound-port/load-task.inbound-port';
import { UPDATE_TASK_INBOUND_PORT } from './inbound-port/update-task.inbound-port';
import { CreateTaskRepository } from './outbound-adapter/create-task.repository';
import { DeleteTaskRepository } from './outbound-adapter/delete-task.repository';
import { LoadTaskRepository } from './outbound-adapter/load-task.repository';
import { UpdateTaskRepository } from './outbound-adapter/update-task.repository';
import { CREATE_TASK_OUTBOUND_PORT } from './outbound-port/create-task.outbound-port';
import { DELETE_TASK_OUTBOUND_PORT } from './outbound-port/delete-task.outbound-port';
import { LOAD_TASK_OUTBOUND_PORT } from './outbound-port/load-task.outbound-port';
import { UPDATE_TASK_OUTBOUND_PORT } from './outbound-port/update-task.outboud-port';
import { CreateTaskService } from './service/create-task.service';
import { DeleteTaskService } from './service/delete-task.service';
import { LoadTaskService } from './service/load-task.service';
import { UpdateTaskService } from './service/update-task.service';
import { TaskRepository } from './task.repository';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([TaskRepository])],
  controllers: [GetTaskController, PostTaskController, DeleteTaskController, UpdateTaskController],
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
    },
    {
      provide: DELETE_TASK_INBOUND_PORT,
      useClass: DeleteTaskService
    },
    {
      provide: DELETE_TASK_OUTBOUND_PORT,
      useClass: DeleteTaskRepository
    },
    {
      provide: UPDATE_TASK_INBOUND_PORT,
      useClass: UpdateTaskService
    },
    {
      provide: UPDATE_TASK_OUTBOUND_PORT,
      useClass: UpdateTaskRepository
    }
  ],
})
export class TaskModule {}


