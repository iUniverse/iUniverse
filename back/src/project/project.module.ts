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
import { PatchProjectController } from './controller/patch-projects.controller';
import { UPDATE_PROJECTS_INBOUND_PORT } from './inbound-port/update-projects.inbound-port';
import { UpdateProjectsService } from './service/update-project.service';
import { UPDATE_PROJECTS_OUTBOUND_PORT } from './outbound-port/update-projects.outbound-port';
import { UpdateProjectRepository } from './outbound-adapter/update-project.repository';
import { RemoveProjectService } from './service/remove-project.service';
import { RemoveProjectRepository } from './outbound-adapter/remove-project.repository';
import { REMOVE_PROJECT_INBOUND_PORT } from './inbound-port/remove-projects.inbound-port';
import { REMOVE_PROJECT_OUTBOUND_PORT } from './outbound-port/remove-projects.outbound-port';

@Module({
    imports : [
        TypeOrmExModule.forCustomRepository([ProjectRepository])
    ],
    controllers : [PostProjectController, GetProjectController, PatchProjectController],
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
        {
            provide : UPDATE_PROJECTS_INBOUND_PORT,
            useClass : UpdateProjectsService
        },
        {
            provide : UPDATE_PROJECTS_OUTBOUND_PORT,
            useClass : UpdateProjectRepository
        },
        {
            provide : REMOVE_PROJECT_INBOUND_PORT,
            useClass : RemoveProjectService
        },
        {
            provide : REMOVE_PROJECT_OUTBOUND_PORT,
            useClass : RemoveProjectRepository
        }
    ]    
})
export class ProjectModule {}