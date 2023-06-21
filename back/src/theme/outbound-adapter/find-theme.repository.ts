import { Injectable } from "@nestjs/common";
import { ThemeRepository } from "../theme.repository";
import { FindThemeOPInputDto, FindThemeOPOutputDto, FindThemeOutboundPort, LoadThemeOPOutputDto } from "../outbound-port/find-theme.outbound-port";
import { FindThemeIPInputDto } from "../inbound-port/find-theme.inbound-port";
import { FindThemeDto } from "../dto/find-theme.dto";

@Injectable()
export class FindThemeRepository implements FindThemeOutboundPort{
    constructor(
        private readonly findThemeRepo : ThemeRepository,
    ){}

    async find(param : FindThemeOPInputDto) : Promise<FindThemeOPOutputDto>{
        return await this.findThemeRepo.FindTheme(param);
    }

    async checkInit(param : FindThemeOPInputDto) : Promise<boolean>{
        return await this.findThemeRepo.CheckInitTheme(param);
    }

    async findMyTheme(param: FindThemeOPInputDto): Promise<FindThemeOPOutputDto> {
        return await this.findThemeRepo.FindMyTheme(param);
    }

    async load() : Promise<LoadThemeOPOutputDto>{
        const userId = 0;
        return await this.findThemeRepo.LoadMyTheme(userId);
    }
}