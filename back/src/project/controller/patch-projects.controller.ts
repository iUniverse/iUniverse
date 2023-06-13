import { Body, Controller, Inject, Put, Patch, ValidationPipe, UsePipes } from "@nestjs/common";
import { UpdateProjectsInboundPort, UpdateProjectIPInputDto, UpdateProjectIPOutputDto, UPDATE_PROJECTS_INBOUND_PORT } from "../inbound-port/update-projects.inbound-port";

@Controller('iuni_project')
export class PatchProjectController{
    constructor(
        @Inject(UPDATE_PROJECTS_INBOUND_PORT)
        private readonly updateProjectsInboundPort : UpdateProjectsInboundPort){};

    @Patch('/')
    @UsePipes(ValidationPipe)
    async update(@Body() updateProject : UpdateProjectIPInputDto) : Promise<UpdateProjectIPOutputDto>{
        return await this.updateProjectsInboundPort.update(updateProject);
    }
}