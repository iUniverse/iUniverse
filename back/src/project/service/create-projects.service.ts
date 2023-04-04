import { Inject, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateProjectsInboundPort, 
    CreateProjectIPInputDto,
    CreateProjectIPOutputDto} from '../inbound-port/create-projects.inbound-port';

import { CREATE_PROJECTS_OUTBOUND_PORT, CreateProjectsOutboundPort } from '../outbound-port/create-projects.outbound-port';

export class CreateProjectsService implements CreateProjectsInboundPort{
    constructor(
        @Inject(CREATE_PROJECTS_OUTBOUND_PORT)
        private readonly createProjectOutboundPort : CreateProjectsOutboundPort) {}

    @UsePipes(ValidationPipe)
    async create(
        params : CreateProjectIPInputDto,
    ) : Promise<CreateProjectIPOutputDto> {
        return this.createProjectOutboundPort.create(params);
    }
} 