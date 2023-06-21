import { Module } from "@nestjs/common";
import { TypeOrmExModule } from "src/typeorm-ex.module";
import { SubtypeRepository } from "./subtype.repository";
import { PostSubtypeController } from "./controller/post-subtype.controller";
import { CreateSubtypeService } from "./service/create-subtype.service";
import { CREATE_SUBTYPE_INBOUND_PORT } from "./inbound-port/create-subtype.inbound-port";
import { CREATE_SUBTYPE_OUTBOUND_PORT } from "./outbound-port/create-subtype.outbound-port";
import { CreateSubtypeRepository } from "./outbound-adapter/create-subtype.repository";
import { GetSubtypeController } from "./controller/get-subtype.controller";
import { FIND_SUBTYPE_INBOUND_PORT } from "./inbound-port/find-subtype.inbound-port";
import { FindSubtypeService } from "./service/find-subtype.service";
import { FIND_SUBTYPE_OUTBOUND_PORT } from "./outbound-port/find-subtype.outbound-port";
import { FindSubtypeRepository } from "./outbound-adapter/find-subtype.repository";

@Module({
    imports : [
        TypeOrmExModule.forCustomRepository([SubtypeRepository])
    ],
    controllers : [GetSubtypeController, PostSubtypeController],
    providers : [
        {
            provide : CREATE_SUBTYPE_INBOUND_PORT,
            useClass : CreateSubtypeService
        },
        {
            provide : CREATE_SUBTYPE_OUTBOUND_PORT,
            useClass : CreateSubtypeRepository
        },
        {
            provide : FIND_SUBTYPE_INBOUND_PORT,
            useClass : FindSubtypeService
        },
        {
            provide : FIND_SUBTYPE_OUTBOUND_PORT,
            useClass : FindSubtypeRepository
        }
    ]
})

export class SubtypeModule{}