import { Body, Controller, Get, Inject, Param } from '@nestjs/common';
import { FindProjectInboundPort, FindProjectIPInputDto, FindProjectIPOutputDto, FIND_PROJECT_INBOUND_PORT } from '../inbound-port/find-projects.inbound-port';
import { LoadProjectsInboundPort, LoadProjectsIPOutputDto, LOAD_PROJECTS_INBOUND_PORT } from '../inbound-port/load-projects.inbound-port';

@Controller('iuni_project')
export class GetProjectController {
    constructor(
        @Inject(LOAD_PROJECTS_INBOUND_PORT)
        private readonly loadProjectsInboundPort : LoadProjectsInboundPort,
        @Inject(FIND_PROJECT_INBOUND_PORT)
        private readonly findProjectInboundPort : FindProjectInboundPort
    ){}

    @Get('/')
    async load():Promise<LoadProjectsIPOutputDto>{
        return this.loadProjectsInboundPort.load();
    }

    @Get('/:id')
    async find(@Param() param : FindProjectIPInputDto):Promise<FindProjectIPOutputDto>{   
        return this.findProjectInboundPort.find(param);
    }
}