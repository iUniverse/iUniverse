import { CustomRepository } from "src/typeorm-ex.decorator";
import { Repository } from "typeorm";
import { ProjectThemeMap } from "./project-theme.entity";
import { CreateProjectThemeDto } from "./dto/create-project-theme.dto";

@CustomRepository(ProjectThemeMap)
export class ProjectThemeRepository extends Repository<ProjectThemeMap>{
    async CreateProjectTheme(param : CreateProjectThemeDto) : Promise<ProjectThemeMap>{
        
        const result = await this.save(param);
        return result;
    }
    
    // async RemoveProjectTheme(param : RemoveProjec)
}