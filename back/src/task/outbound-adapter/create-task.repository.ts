import { Injectable } from "@nestjs/common";
import { CreateTaskOutboundPort, CreateTaskOutboundPortInputDto, CreateTaskOutboundPortOutputDto } from "../outbound-port/create-task.outbound-port";
import { LoadTaskOutboundPortOutputDto } from "../outbound-port/load-task.outbound-port";
import { TaskRepository } from "../task.repository";

@Injectable()
export class CreateTaskRepository implements CreateTaskOutboundPort{
    constructor(
        private readonly createTaskRepo: TaskRepository
    ){}

    async create(taskInfo: CreateTaskOutboundPortInputDto): Promise<CreateTaskOutboundPortOutputDto>{
        return await this.createTaskRepo.CreateTask(taskInfo);
    }
}