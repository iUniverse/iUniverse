import { CustomRepository } from "src/typeorm-ex.decorator";
import { Repository } from "typeorm";
import { CreateProjectDto } from "./dto/create-project.dto";
import { FindProjectDto } from "./dto/find-project.dto";
import { FindProjectOutboundPortInputDto } from "./outbound-port/find-projects.outbound-ports";
import { Project } from "./project.entity";

@CustomRepository(Project)
export class ProjectRepository extends Repository<Project> {
    async CreateProject(CreateProjectDto : CreateProjectDto): Promise<Project>{
        //const {name} = CreateProjectDto;
        return await this.save(CreateProjectDto);
    }

    async LoadProject() : Promise<Array<Project>>{
        return await this.find();
    }

    async FindProject(param : FindProjectOutboundPortInputDto) : Promise<Project>{
        return await this.findOne({
            where : {
                id : param.id
            }
        });
    }
}