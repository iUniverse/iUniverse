import { Injectable } from "@nestjs/common";
import { LoadTaskOPInputDto, LoadTaskOutboundPort, LoadTaskOutboundPortOutputDto } from "../outbound-port/load-task.outbound-port";
import { TaskRepository } from "../task.repository";

@Injectable()
export class LoadTaskRepository implements LoadTaskOutboundPort{
    constructor(
        private readonly loadTaskRepo: TaskRepository
    ){}

    async load(param : LoadTaskOPInputDto): Promise<LoadTaskOutboundPortOutputDto>{
        return await this.loadTaskRepo.LoadTask(param);
    }

    
}