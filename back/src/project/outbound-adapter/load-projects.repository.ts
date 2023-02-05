import { Injectable } from "@nestjs/common";
import { LoadProjectsOutboundPort, LoadProjectsOutboundPortOutputDto } from "../outbound-port/load-projects.outbound-port";
import { ProjectRepository } from "../project.repository";

@Injectable()
export class LoadProjectsRepository implements LoadProjectsOutboundPort{
    constructor(
        private readonly loadProjectRepo : ProjectRepository
    ){}

    async load() : Promise<LoadProjectsOutboundPortOutputDto>{
        return await this.loadProjectRepo.LoadProject();
    }
}