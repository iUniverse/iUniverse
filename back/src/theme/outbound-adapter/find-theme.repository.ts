import { Injectable } from "@nestjs/common";
import { ThemeRepository } from "../theme.repository";
import { FindThemeOPInputDto, FindThemeOPOutputDto, FindThemeOutboundPort } from "../outbound-port/find-theme.outbound-port";
import { FindThemeIPInputDto } from "../inbound-port/find-theme.inbound-port";

@Injectable()
export class FindThemeRepository implements FindThemeOutboundPort{
    constructor(
        private readonly findThemeRepo : ThemeRepository
    ){}

    async find(param : FindThemeOPInputDto) : Promise<FindThemeOPOutputDto>{
        return await this.findThemeRepo.FindTheme(param);
    }
}