import { CustomRepository } from "src/typeorm-ex.decorator";
import { Repository } from "typeorm";
import { CreateProjectDto } from "./dto/create-project.dto";
import { Project } from "./project.entity";

@CustomRepository(Project)
export class ProjectRepository extends Repository<Project> {
    async CreateProject(CreateProjectDto : CreateProjectDto): Promise<Project>{
        //const {name} = CreateProjectDto;
        const result = await this.save(CreateProjectDto);
        console.log(result);
        return result;
    }
}