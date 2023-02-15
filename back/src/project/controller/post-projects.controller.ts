import { Body, Controller, Inject, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CREATE_PROJECTS_INBOUND_PORT, CreateProjectsInboundPort, CreateProjectsInboundPortInputDto, CreateProjectsInboundPortOutputDto } from "../inbound-port/create-projects.inbound-port";

@Controller('iuni_project')
export class PostProjectController{
    constructor(
        @Inject(CREATE_PROJECTS_INBOUND_PORT)
        private readonly createProjectsInboundPort : CreateProjectsInboundPort){};
 
    @Post('/')
    @UsePipes(ValidationPipe)
    async create(@Body() project : CreateProjectsInboundPortInputDto) : Promise<CreateProjectsInboundPortOutputDto>{
        return await this.createProjectsInboundPort.create(project);
    }
}