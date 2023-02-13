import { Injectable } from "@nestjs/common";
import { UpdateTaskOutboundPort, UpdateTaskOutboundPortInputDto, UpdateTaskOutboundPortOutputDto } from "../outbound-port/update-task.outboud-port";
import { TaskRepository } from "../task.repository";

@Injectable()
export class UpdateTaskRepository implements UpdateTaskOutboundPort{
    constructor(
        private readonly updateTaskRepo: TaskRepository
    ){}

    async update(taskInfo: UpdateTaskOutboundPortInputDto): Promise<UpdateTaskOutboundPortOutputDto>{
        await this.updateTaskRepo.UpdateTask(taskInfo);
        return '[update repository] : ok';
    }
}