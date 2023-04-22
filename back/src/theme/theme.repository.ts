import { CustomRepository } from "src/typeorm-ex.decorator";
import { Repository } from "typeorm";
import { CreateThemeDto } from "./dto/create-theme.dto";
import {Theme} from './theme.entity';
import { FindThemeDto } from "./dto/find-theme.dto";
import { FindThemeOPInputDto } from "./outbound-port/find-theme.outbound-port";

@CustomRepository(Theme)
export class ThemeRepository extends Repository<Theme>{
    async CreateTheme(CreateThemeDto : CreateThemeDto) : Promise<Theme>{
        return await this.save(CreateThemeDto);
    }

    async LoadMyTheme(param) : Promise<Array<Theme>> {
        return await this.find({
            where : {
                id : param.userId
            }
        });
    }

    async FindTheme(param : FindThemeOPInputDto) : Promise<Theme>{
        return await this.findOne({
            where : {
                id : param.userId
            }
        });
    }

    // async UpdateTheme() : Promise<boolean>{

    // }

    // async RemoveTheme() : Promise<boolean>{

    // }
}