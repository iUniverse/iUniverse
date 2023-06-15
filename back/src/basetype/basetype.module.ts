import { Module } from "@nestjs/common";
import { BasetypeRepository } from "./basetype.repository";
import { PostBaseTypeController } from "./controller/post-basetype.controller";
import { TypeOrmExModule } from "src/typeorm-ex.module";
import { CREATE_BASETYPE_INBOUND_PORT } from "./inbound-port/create-basetype.inbound-port";
import { CreateBasetypeService } from "./service/create-basetype.service";
import { CREATE_BASETYPE_OUTBOUND_PORT } from "./outbound-port/create-basetype.outbound-port";
import { CreateBasetypeRepository } from "./outbound-adapter/create-basetype.repository";

@Module({
    imports : [
        TypeOrmExModule.forCustomRepository([BasetypeRepository])
    ],
    controllers : [PostBaseTypeController],
    providers : [
        {
            provide : CREATE_BASETYPE_INBOUND_PORT,
            useClass : CreateBasetypeService
        },
        {
            provide : CREATE_BASETYPE_OUTBOUND_PORT,
            useClass : CreateBasetypeRepository
        }
    ]
})

export class BasetypeModule{}