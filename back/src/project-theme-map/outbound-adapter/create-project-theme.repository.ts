import { Injectable } from "@nestjs/common";
import { CreateProjectThemeOPInputDto, CreateProjectThemeOutboundPort } from "../outbound-port/create-project-theme.outbound-port";
import { ProjectThemeRepository } from "../project-theme.repository";

@Injectable()
export class CreateProjectThemeRepository implements CreateProjectThemeOutboundPort{
    constructor(
        private readonly createProjectThemeRepo : ProjectThemeRepository
    ){}

    async create(params : CreateProjectThemeOPInputDto) : Promise<CreateProjectThemeOPInputDto>{
        const result = await this.createProjectThemeRepo.CreateProjectTheme(params);
        return result;
    }
}