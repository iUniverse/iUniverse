import { CustomRepository } from "src/typeorm-ex.decorator";
import { Repository } from "typeorm";
import { ProjectTheme } from "./project-theme.entity";
import { CreateProjectThemeDto } from "./dto/create-project-theme.dto";

@CustomRepository(ProjectTheme)
export class ProjectThemeRepository extends Repository<ProjectTheme>{
    async CreateProjectTheme(param : CreateProjectThemeDto) : Promise<ProjectTheme>{
        const result = await this.save(param);
        return result;
    }
    
    // async RemoveProjectTheme(param : RemoveProjec)
}