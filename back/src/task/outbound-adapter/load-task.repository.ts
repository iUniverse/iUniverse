import { Injectable } from "@nestjs/common";
import { LoadTaskOPInputDto, LoadTaskOutboundPort, LoadTaskOutboundPortOutputDto, LoadByDateOPInputDto, LoadByDateboundPort, LoadByDateOPOutputDto } from "../outbound-port/load-task.outbound-port";
import { TaskRepository } from "../task.repository";

@Injectable()
export class LoadTaskRepository implements LoadTaskOutboundPort, LoadByDateboundPort{
    constructor(
        private readonly loadTaskRepo: TaskRepository
    ){}

    async load(param : LoadTaskOPInputDto): Promise<LoadTaskOutboundPortOutputDto>{
        return await this.loadTaskRepo.LoadTask(param);
    }

    async loadByDate(param : LoadByDateOPInputDto): Promise<LoadByDateOPOutputDto>{
        return await this.loadTaskRepo.LoadByDate(param);
    }
}