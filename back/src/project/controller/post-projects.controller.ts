import { Body, Controller, Inject, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { response } from "express";
import { CREATE_PROJECTS_INBOUND_PORT, CreateProjectsInboundPort, CreateProjectIPInputDto, CreateProjectIPOutputDto } from "../inbound-port/create-projects.inbound-port";

@Controller('iuni_project')
export class PostProjectController{
    constructor(
        @Inject(CREATE_PROJECTS_INBOUND_PORT)
        private readonly createProjectsInboundPort : CreateProjectsInboundPort){};
 
    @Post('/')
    @UsePipes(ValidationPipe)
    async create(@Body() project : CreateProjectIPInputDto) : Promise<CreateProjectIPOutputDto>{
        try{
            console.log(project);
            return await this.createProjectsInboundPort.create(project);
        }
        catch(e){
            console.log(e);
            throw Error(e);
        }
    }
}