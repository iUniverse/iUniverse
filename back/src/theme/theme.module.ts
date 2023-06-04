import { TypeOrmExModule } from "src/typeorm-ex.module";
import { ThemeRepository } from "./theme.repository";
import { PostThemeController } from "./controller/post-theme-controller";
import { GetThemeController } from "./controller/get-theme.controller";
import { CREATE_THEME_INBOUND_PORT } from "./inbound-port/create-theme.inbound-port";
import { CreateThemeService } from "./service/create-theme.service";
import { Module } from "@nestjs/common";
import { CREATE_THEME_OUTBOUND_PORT } from "./outbound-port/create-theme.outbound-port";
import { CreateThemeRepository } from "./outbound-adapter/create-theme.repository";
import { FIND_THEME_INBOUND_PORT } from "./inbound-port/find-theme.inbound-port";
import { FIND_THEME_OUTBOUND_PORT } from "./outbound-port/find-theme.outbound-port";
import { FindThemeRepository } from "./outbound-adapter/find-theme.repository";
import { FindThemeService } from "./service/find-theme.service";
import { UPDATE_THEME_INBOUND_PORT } from "./inbound-port/update-theme.inbound-port";
import { UpdateThemeRepository } from "./outbound-adapter/update-theme.repository";
import { UPDATE_THEME_OUTBOUND_PORT } from "./outbound-port/update-theme.outbound-port";
import { UpdateThemeService } from "./service/update-theme.service";
import { PatchThemeController } from "./controller/patch-theme.controller";


@Module({
    imports : [
        TypeOrmExModule.forCustomRepository([ThemeRepository])
    ],
    controllers : [PostThemeController, GetThemeController, PatchThemeController],
    providers : [
        {
            provide : CREATE_THEME_INBOUND_PORT,
            useClass : CreateThemeService
        },
        {
            provide : CREATE_THEME_OUTBOUND_PORT,
            useClass : CreateThemeRepository
        },
        {
            provide : FIND_THEME_INBOUND_PORT,
            useClass : FindThemeService   
        },
        {
            provide : FIND_THEME_OUTBOUND_PORT,
            useClass : FindThemeRepository,
        },
        {
            provide : UPDATE_THEME_INBOUND_PORT,
            useClass : UpdateThemeService
        },
        {
            provide : UPDATE_THEME_OUTBOUND_PORT,
            useClass : UpdateThemeRepository
        }
    ]
})
export class ThemeModule{}