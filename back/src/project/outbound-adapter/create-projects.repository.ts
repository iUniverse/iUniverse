import { CreateProjectsOutboundPort, 
    CreateProjectsOutboundPortInputDto, 
    CreateProjectsOutboundPortOutputDto} from '../outbound-port/create-projects.outbound-port'
import { Project } from '../project.entity';
import { CustomRepository } from 'src/typeorm-ex.decorator';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { ProjectRepository } from '../project.repository';

@Injectable()
export class CreateProjectsRepository implements CreateProjectsOutboundPort{
    constructor(
        private readonly createProjectRepo : ProjectRepository
    ){}

    async create(params: CreateProjectsOutboundPortInputDto) : Promise<CreateProjectsOutboundPortOutputDto>{
        //데이터베이스 연결 
        const result = await this.createProjectRepo.CreateProject(params);       
        return result;
    }
}