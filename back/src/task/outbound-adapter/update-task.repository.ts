import { Injectable } from "@nestjs/common";
import { UpdateTask, UpdateTaskOutboundPort,ResultUpdateTask, UpdateAllStatus } from "../outbound-port/update-task.outboud-port";
import { TaskRepository } from "../task.repository";


@Injectable()
export class UpdateTaskRepository implements UpdateTaskOutboundPort{
    constructor(
        private readonly updateTaskRepo: TaskRepository
    ){}

    // async update(taskInfo: UpdateTaskOutboundPortInputDto): Promise<UpdateTaskOutboundPortOutputDto>{
    //     await this.updateTaskRepo.UpdateTask(taskInfo);
    //     return '[update repository] : ok';
    // }

    async update(data : UpdateTask) : Promise<ResultUpdateTask> {
        const result = await this.updateTaskRepo.UpdateTask(data);
        return { "result" : result };
    }

    async updateAllTaskByStatus(data: UpdateAllStatus): Promise<ResultUpdateTask> {
        const result = await this.updateTaskRepo.UpdateAllTaskByStatus(data);
        return { "result" : result};
    }
}