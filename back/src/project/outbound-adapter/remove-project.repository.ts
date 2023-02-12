import { Injectable } from "@nestjs/common";
import { RemoveProjectOutboundPort, RemoveProjectOutboundPortInputDto, RemoveProjectOutboundPortOutputDto } from "../outbound-port/remove-projects.outbound-port";
import { ProjectRepository } from "../project.repository";

@Injectable()
export class RemoveProjectRepository implements RemoveProjectOutboundPort{
    constructor(
        private readonly removeProjectRepo : ProjectRepository
    ){}
    
    async remove(param : RemoveProjectOutboundPortInputDto) : Promise<RemoveProjectOutboundPortOutputDto>{
        const result = await this.removeProjectRepo.RemoveProject(param);
        return { "result" : result };
    }
}