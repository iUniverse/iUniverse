import { Body, Controller, Inject, Put } from "@nestjs/common";
import { UpdateProjectsInboundPort, UpdateProjectIPInputDto, UpdateProjectIPOutputDto, UPDATE_PROJECTS_INBOUND_PORT } from "../inbound-port/update-projects.inbound-port";

@Controller('iuni_project')
export class PutProjectController{
    constructor(
        @Inject(UPDATE_PROJECTS_INBOUND_PORT)
        private readonly updateProjectsInboundPort : UpdateProjectsInboundPort){};

    @Put('/')
    async update(@Body() updateProject : UpdateProjectIPInputDto) : Promise<UpdateProjectIPOutputDto>{
        return await this.updateProjectsInboundPort.update(updateProject);
    }
}