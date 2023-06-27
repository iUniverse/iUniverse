import { ProjectRepository } from "src/project/project.repository";
import { TypeOrmExModule } from "src/typeorm-ex.module";
import { PostBoardController } from "./controller/post-board.controller";
import { Module } from "@nestjs/common";
import { CREATE_BOARD_INBOUND_PORT } from "./inbound-port/create-board.inbound-port";
import { CreateBoardService } from "./service/create-board.service";
import { CreateBoardRepository } from "./outbound-adapter/create-board.repository";
import { CREATE_BOARD_OUTBOUND_PORT } from "./outbound-port/create-board.outbound-port";

@Module({
    imports : [
        TypeOrmExModule.forCustomRepository([ProjectRepository])
    ],
    controllers : [PostBoardController],
    providers : [
        {
            provide : CREATE_BOARD_INBOUND_PORT,
            useClass : CreateBoardService
        },
        {
            provide : CREATE_BOARD_OUTBOUND_PORT,
            useClass : CreateBoardRepository
        }
    ]
})

export class BoardModule{}