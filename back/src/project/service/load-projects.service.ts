import { Inject } from "@nestjs/common";
import { LoadProjectsInboundPort, LoadProjectsIPOutputDto } from "../inbound-port/load-projects.inbound-port";
import { LoadProjectsOutboundPort, LOAD_PROJECTS_OUTBOUND_PORT } from "../outbound-port/load-projects.outbound-port";

export class LoadProjectsService implements LoadProjectsInboundPort{
    constructor(
        @Inject(LOAD_PROJECTS_OUTBOUND_PORT)
        private readonly loadProjectOutboundPort : LoadProjectsOutboundPort
    ){}

    async load() : Promise<LoadProjectsIPOutputDto> {
        const projects =  await this.loadProjectOutboundPort.load();
        return {
            'favorite_projects' : projects.filter(d => d.isFavorite === true),
            'normal_projects' : projects
        };
    }
}

