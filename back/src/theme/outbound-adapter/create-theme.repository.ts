import { Injectable } from "@nestjs/common";
import { CreateThemeOPInputDto, CreateThemeOPOutputDto, CreateThemeOutboundPort } from "../outbound-port/create-theme.outbound-port";
import { ThemeRepository } from "../theme.repository";

@Injectable()
export class CreateThemeRepository implements CreateThemeOutboundPort{
    constructor(
        private readonly createThemeRepo : ThemeRepository
    ){}

    async create(param : CreateThemeOPInputDto) : Promise<CreateThemeOPOutputDto>{
        const result = await this.createThemeRepo.CreateTheme(param);
        return result;
    }

    async createInit(param : CreateThemeOPInputDto) : Promise<boolean>{
        const result = await this.createThemeRepo.CreateTheme(param);
        result;
    }
}