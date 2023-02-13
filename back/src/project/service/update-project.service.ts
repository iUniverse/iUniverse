import { Inject } from '@nestjs/common';
import { UpdateProjectsInboundPort, UpdateProjectsInboundPortInputDto, UpdateProjectsInboundPortOutputDto } from '../inbound-port/update-projects.inbound-port';
import { UpdateProjectsOutboundPort, UPDATE_PROJECTS_OUTBOUND_PORT } from '../outbound-port/update-projects.outbound-port';

export class UpdateProjectsService implements UpdateProjectsInboundPort{
    constructor(
        @Inject(UPDATE_PROJECTS_OUTBOUND_PORT)
        private readonly updateProjectOutboundPort : UpdateProjectsOutboundPort
    ){}

    async update(params : UpdateProjectsInboundPortInputDto) : Promise<UpdateProjectsInboundPortOutputDto> {        
        return this.updateProjectOutboundPort.update(params);
    }
}