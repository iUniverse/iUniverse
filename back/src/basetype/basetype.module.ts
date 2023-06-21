import { Module } from "@nestjs/common";
import { BasetypeRepository } from "./basetype.repository";
import { PostBasetypeController } from "./controller/post-basetype.controller";
import { TypeOrmExModule } from "src/typeorm-ex.module";
import { CREATE_BASETYPE_INBOUND_PORT } from "./inbound-port/create-basetype.inbound-port";
import { CreateBasetypeService } from "./service/create-basetype.service";
import { CREATE_BASETYPE_OUTBOUND_PORT } from "./outbound-port/create-basetype.outbound-port";
import { CreateBasetypeRepository } from "./outbound-adapter/create-basetype.repository";
import { GetBasetypeController } from "./controller/get-basetype.controller";
import { FIND_BASETYPE_INBOUND_PORT } from "./inbound-port/find-basetype.inbound-port";
import { FIND_BASETYPE_OUTBOUND_PORT } from "./outbound-port/find-basetype.outbound-port";
import { FindBasetypeRepository } from "./outbound-adapter/find-basetype.repository";
import { FindBasetypeService } from "./service/find-basetype.service";

@Module({
    imports : [
        TypeOrmExModule.forCustomRepository([BasetypeRepository])
    ],
    controllers : [PostBasetypeController, GetBasetypeController],
    providers : [
        {
            provide : CREATE_BASETYPE_INBOUND_PORT,
            useClass : CreateBasetypeService
        },
        {
            provide : CREATE_BASETYPE_OUTBOUND_PORT,
            useClass : CreateBasetypeRepository
        },
        {
            provide : FIND_BASETYPE_INBOUND_PORT,
            useClass : FindBasetypeService
        },
        {
            provide : FIND_BASETYPE_OUTBOUND_PORT,
            useClass : FindBasetypeRepository
        }
    ]
})

export class BasetypeModule{}