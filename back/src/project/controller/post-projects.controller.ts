import { Body, Controller, Inject, Post } from "@nestjs/common";
import { CREATE_PROJECTS_INBOUND_PORT, CreateProjectsInboundPort, CreateProjectsInboundPortInputDto } from "../inbound-port/create-projects.inbound-port";

@Controller('iuni_project')
export class PostProjectController{
    constructor(
        @Inject(CREATE_PROJECTS_INBOUND_PORT)
        private readonly createProjectsInboundPort : CreateProjectsInboundPort){};
 
    @Post('/')
    async create(@Body() project : CreateProjectsInboundPortInputDto){
        console.log(project.name);
        return this.createProjectsInboundPort.create(project);
    }
}