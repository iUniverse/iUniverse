import { Module } from '@nestjs/common';
import { TypeOrmExModule } from 'src/typeorm-ex.module';
import { CreateProjectsRepository } from './outbound-adapter/create-projects.repository';
import { PostProjectController } from './controller/post-projects.controller';
import { GetProjectController } from './controller/get-projects.controllers';
import { CreateProjectsService } from './service/create-projects.service';
import { CREATE_PROJECTS_INBOUND_PORT } from './inbound-port/create-projects.inbound-port';
import { CREATE_PROJECTS_OUTBOUND_PORT } from './outbound-port/create-projects.outbound-port';
import { ProjectRepository } from './project.repository';
import { LoadProjectsService } from './service/load-projects.service';
import { LoadProjectsRepository } from './outbound-adapter/load-projects.repository';
import { LOAD_PROJECTS_INBOUND_PORT } from './inbound-port/load-projects.inbound-port';
import { LOAD_PROJECTS_OUTBOUND_PORT } from './outbound-port/load-projects.outbound-port';
import { FindProjectService } from './service/find-project.service';
import { FIND_PROJECT_OUTBOUND_PORT } from './outbound-port/find-projects.outbound-ports';
import { FindProjectRepository } from './outbound-adapter/find-project.repository';
import { FIND_PROJECT_INBOUND_PORT } from './inbound-port/find-projects.inbound-port';

@Module({
    imports : [
        TypeOrmExModule.forCustomRepository([ProjectRepository])
    ],
    controllers : [PostProjectController, GetProjectController],
    providers : [
        {
            //inbound
            provide : CREATE_PROJECTS_INBOUND_PORT,
            useClass : CreateProjectsService
        },
        {
            //outbound
            provide : CREATE_PROJECTS_OUTBOUND_PORT,
            useClass : CreateProjectsRepository
        },
        {
            provide : LOAD_PROJECTS_INBOUND_PORT,
            useClass : LoadProjectsService
        },
        {
            provide : LOAD_PROJECTS_OUTBOUND_PORT,
            useClass : LoadProjectsRepository
        },
        {
            provide : FIND_PROJECT_INBOUND_PORT,
            useClass : FindProjectService
        },
        {
            provide : FIND_PROJECT_OUTBOUND_PORT,
            useClass : FindProjectRepository
        },
    ]    
})
export class ProjectModule {}