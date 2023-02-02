import { Module } from '@nestjs/common';
import { TypeOrmExModule } from 'src/typeorm-ex.module';
import { CreateProjectsRepository } from './outbound-adapter/create-projects.repository';
import { PostProjectController } from './controller/post-projects.controller';
import { CreateProjectsService } from './service/create-projects.service';
import { CREATE_PROJECTS_INBOUND_PORT } from './inbound-port/create-projects.inbound-port';
import { CREATE_PROJECTS_OUTBOUND_PORT } from './outbound-port/create-projects.outbound-port';
import { ProjectRepository } from './project.repository';

@Module({
    imports : [
        TypeOrmExModule.forCustomRepository([ProjectRepository])
    ],
    controllers : [PostProjectController],
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
        }
    ]    
})
export class ProjectModule {}