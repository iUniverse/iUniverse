import { Module } from "@nestjs/common";
import { TypeOrmExModule } from "src/typeorm-ex.module";
import { PostProjectThemeController } from "./controller/post-project-theme.controller";
import { CREATE_PROJECT_THEME_INBOUND_PORT } from "./inbound-port/create-project-theme.inbound-port";
import { CreateProjectThemeService } from "./service/create-project-theme.service";
import { CREATE_PROJECT_THEME_OUTBOUND_PORT } from "./outbound-port/create-project-theme.outbound-port";
import { CreateProjectThemeRepository } from "./outbound-adapter/create-project-theme.repository";
import { ProjectThemeRepository } from "./project-theme.repository";

@Module({
    imports : [
        TypeOrmExModule.forCustomRepository([ProjectThemeRepository])
    ],
    controllers : [PostProjectThemeController],
    providers : [
        {
            provide : CREATE_PROJECT_THEME_INBOUND_PORT,
            useClass : CreateProjectThemeService
        },
        {
            provide : CREATE_PROJECT_THEME_OUTBOUND_PORT,
            useClass :CreateProjectThemeRepository
        }
    ]
})
export class ProjectThemeModule{}