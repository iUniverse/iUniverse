import { Module } from "@nestjs/common";
import { TypeOrmExModule } from "src/typeorm-ex.module";
import { IuniCatRepository } from "./iuinicat.repository";
import { GetIuniCatController } from "./controller/get-iunicat.controller";
import { FIND_IUNICAT_INBOUND_PORT } from "./inbound-port/find-iunicat.inbound-port";
import { FindIuniCatService } from "./service/find-iunicat.service";
import { FIND_IUNICAT_OUTBOUND_PORT } from "./outbound-port/find-iunicat.outbound-port";
import { FindIuniCatRepository } from "./outbound-adapter/find-iunicat.repository";
import { PostIuniCatController } from "./controller/post-iunicat.controller";
import { CREATE_IUNICAT_INBOUND_PORT } from "./inbound-port/create-iunicat.inbound-port";
import { CREATE_IUNICAT_OUTBOUND_PORT } from "./outbound-port/create-iunicat.outbound-port";
import { CreateIuniCatRepository } from "./outbound-adapter/create-iunicat.repository";
import { CreateIuniCatService } from "./service/create-iunicat.service";

@Module({
    imports : [
        TypeOrmExModule.forCustomRepository([IuniCatRepository])
    ],
    controllers : [
        GetIuniCatController,
        PostIuniCatController
    ],
    providers : [
        {
            provide : FIND_IUNICAT_INBOUND_PORT,
            useClass : FindIuniCatService
        },
        {
            provide : FIND_IUNICAT_OUTBOUND_PORT,
            useClass : FindIuniCatRepository
        },
        {
            provide : CREATE_IUNICAT_INBOUND_PORT,
            useClass : CreateIuniCatService
        },
        {
            provide : CREATE_IUNICAT_OUTBOUND_PORT,
            useClass : CreateIuniCatRepository
        }
    ]
})
export class IuniCatModule {}