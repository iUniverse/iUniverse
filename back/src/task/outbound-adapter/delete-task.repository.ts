import { Injectable } from "@nestjs/common";
import { DeleteTaskOutboundPort, DeleteTaskOutboundPortInputDto, DeleteTaskOutboundPortOutputDto } from "../outbound-port/delete-task.outbound-port";
import { TaskRepository } from "../task.repository";

@Injectable()
export class DeleteTaskRepository implements DeleteTaskOutboundPort{
    constructor(
        private readonly deleteTaskRepo: TaskRepository
    ){}

    async delete(taskInfo: DeleteTaskOutboundPortInputDto): Promise<DeleteTaskOutboundPortOutputDto>{
        await this.deleteTaskRepo.DeleteTask(taskInfo);
        return '[delete repository] : ok';
    }
}