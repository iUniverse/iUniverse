import { CustomRepository } from "src/typeorm-ex.decorator";
import { Repository } from "typeorm";
import { CreateProjectDto } from "./dto/create-project.dto";
import { FindProjectDto } from "./dto/find-project.dto";
import { FindProjectOutboundPortInputDto } from "./outbound-port/find-projects.outbound-ports";
import { RemoveProjectOutboundPort, RemoveProjectOutboundPortInputDto } from "./outbound-port/remove-projects.outbound-port";
import { UpdateProjectsOutboundPort, UpdateProjectsOutboundPortInputDto } from "./outbound-port/update-projects.outbound-port";
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

    async UpdateProject(param : UpdateProjectsOutboundPortInputDto) : Promise<boolean>{
        const obj : object = {};
        console.log(param);
        obj[param.key] = param.value;
        
        const result =  await this.createQueryBuilder()
                        .update(Project)
                        .set(obj)
                        .where("id = :id", { id : param.id})
                        .execute();

        return result.affected === 1 ? true : false;
    }

    async RemoveProject(param : RemoveProjectOutboundPortInputDto) : Promise<boolean>{
        const result = await this.delete(param.id);
        return result.affected === 1 ? true : false;
    }
}