import { Module } from "@nestjs/common";
import { TypeOrmExModule } from "src/typeorm-ex.module";
import { SubtypeRepository } from "./subtype.repository";
import { PostSubtypeController } from "./controller/post-subtype.controller";
import { CreateSubtypeService } from "./service/create-subtype.service";
import { CREATE_SUBTYPE_INBOUND_PORT } from "./inbound-port/create-subtype.inbound-port";
import { CREATE_SUBTYPE_OUTBOUND_PORT } from "./outbound-port/create-subtype.outbound-port";
import { CreateSubtypeRepository } from "./outbound-adapter/create-subtype.repository";

@Module({
    imports : [
        TypeOrmExModule.forCustomRepository([SubtypeRepository])
    ],
    controllers : [PostSubtypeController],
    providers : [
        {
            provide : CREATE_SUBTYPE_INBOUND_PORT,
            useClass : CreateSubtypeService
        },
        {
            provide : CREATE_SUBTYPE_OUTBOUND_PORT,
            useClass : CreateSubtypeRepository
        }
    ]
})

export class SubtypeModule{}