import { Injectable } from "@nestjs/common";
import { UpdateProjectsOutboundPort, UpdateProjectsOutboundPortInputDto, UpdateProjectsOutboundPortOutputDto } from "../outbound-port/update-projects.outbound-port";
import { ProjectRepository } from "../project.repository";

@Injectable()
export class UpdateProjectRepository implements UpdateProjectsOutboundPort{
    constructor(
        private readonly updateProjectRepo : ProjectRepository
    ){}

    async update(params : UpdateProjectsOutboundPortInputDto) : Promise<UpdateProjectsOutboundPortOutputDto>{
        const result = await this.updateProjectRepo.UpdateProject(params);
        return { "result" : result };
    }
}