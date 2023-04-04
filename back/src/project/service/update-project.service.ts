import { Inject } from '@nestjs/common';
import { UpdateProjectsInboundPort, UpdateProjectIPInputDto, UpdateProjectIPOutputDto } from '../inbound-port/update-projects.inbound-port';
import { UpdateProjectsOutboundPort, UPDATE_PROJECTS_OUTBOUND_PORT } from '../outbound-port/update-projects.outbound-port';

export class UpdateProjectsService implements UpdateProjectsInboundPort{
    constructor(
        @Inject(UPDATE_PROJECTS_OUTBOUND_PORT)
        private readonly updateProjectOutboundPort : UpdateProjectsOutboundPort
    ){}

    async update(params : UpdateProjectIPInputDto) : Promise<UpdateProjectIPOutputDto> {        
        return this.updateProjectOutboundPort.update(params);
    }
}