import { Body, Controller, Inject, Put } from "@nestjs/common";
import { UpdateProjectsInboundPort, UpdateProjectsInboundPortInputDto, UpdateProjectsInboundPortOutputDto, UPDATE_PROJECTS_INBOUND_PORT } from "../inbound-port/update-projects.inbound-port";

@Controller('iuni_project')
export class PutProjectController{
    constructor(
        @Inject(UPDATE_PROJECTS_INBOUND_PORT)
        private readonly updateProjectsInboundPort : UpdateProjectsInboundPort){};

    @Put('/')
    async update(@Body() updateProject : UpdateProjectsInboundPortInputDto) : Promise<UpdateProjectsInboundPortOutputDto>{
        return await this.updateProjectsInboundPort.update(updateProject);
    }
}