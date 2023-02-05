import { Inject } from "@nestjs/common";
import { LoadProjectsInboundPort, LoadProjectsInboundPortOutputDto } from "../inbound-port/load-projects.inbound-port";
import { LoadProjectsOutboundPort, LOAD_PROJECTS_OUTBOUND_PORT } from "../outbound-port/load-projects.outbound-port";

export class LoadProjectsService implements LoadProjectsInboundPort{
    constructor(
        @Inject(LOAD_PROJECTS_OUTBOUND_PORT)
        private readonly loadProjectOutboundPort : LoadProjectsOutboundPort
    ){}

    async load() : Promise<LoadProjectsInboundPortOutputDto> {
        return this.loadProjectOutboundPort.load();
    }
}