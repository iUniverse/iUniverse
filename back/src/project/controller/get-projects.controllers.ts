import { Body, Controller, Get, Inject, Param } from '@nestjs/common';
import { FindProjectInboundPort, FindProjectInputDto, FindProjectOutputDto, FIND_PROJECT_INBOUND_PORT } from '../inbound-port/find-projects.inbound-port';
import { LoadProjectsInboundPort, LoadProjectsInboundPortOutputDto, LOAD_PROJECTS_INBOUND_PORT } from '../inbound-port/load-projects.inbound-port';

@Controller('iuni_project')
export class GetProjectController {
    constructor(
        @Inject(LOAD_PROJECTS_INBOUND_PORT)
        private readonly loadProjectsInboundPort : LoadProjectsInboundPort,
        @Inject(FIND_PROJECT_INBOUND_PORT)
        private readonly findProjectInboundPort : FindProjectInboundPort
    ){}

    @Get('/')
    async load():Promise<LoadProjectsInboundPortOutputDto>{
        return this.loadProjectsInboundPort.load();
    }

    @Get('/:id')
    async find(@Param() param : FindProjectInputDto):Promise<FindProjectOutputDto>{   
        return this.findProjectInboundPort.find(param);
    }
}