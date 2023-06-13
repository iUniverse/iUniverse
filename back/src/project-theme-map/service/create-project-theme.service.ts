import { Body, Inject, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateProjectThemeIPInputDto, CreateProjectThemeIPOutputDto, CreateProjectThemeInboundPort } from "../inbound-port/create-project-theme.inbound-port";
import { CREATE_PROJECT_THEME_OUTBOUND_PORT, CreateProjectThemeOutboundPort } from "../outbound-port/create-project-theme.outbound-port";

export class CreateProjectThemeService implements CreateProjectThemeInboundPort{
    constructor(
        @Inject(CREATE_PROJECT_THEME_OUTBOUND_PORT)
        private readonly createProjectThemeOutboundPort : CreateProjectThemeOutboundPort
    ){}

    @UsePipes(ValidationPipe)
    async create(@Body() param : CreateProjectThemeIPInputDto) : Promise<CreateProjectThemeIPOutputDto>{
        return this.createProjectThemeOutboundPort.create(param);
    }
}