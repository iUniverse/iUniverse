import { Injectable } from "@nestjs/common";
import { UpdateThemeOPInputDto, UpdateThemeOPOutputDto, UpdateThemeOutboundPort } from "../outbound-port/update-theme.outbound-port";
import { ThemeRepository } from "../theme.repository";

@Injectable()
export class UpdateThemeRepository implements UpdateThemeOutboundPort {
    constructor(
        private readonly updateThemeRepo : ThemeRepository
    ){}

    async update(param: UpdateThemeOPInputDto) : Promise<UpdateThemeOPOutputDto>{
        const result = await this.updateThemeRepo.UpdateTheme(param);
        return { "result" : result};
    }
}