import { TypeOrmExModule } from "src/typeorm-ex.module";
import { CREATE_BOARD_TASK_MAP_INBOUND_PORT } from "./inbound-port/create-board-task-map.inbound-port";
import { CreateBoardTaskMapService } from "./service/create-board-task-map.service";
import { CREATE_BOARD_TASK_MAP_OUTBOUND_PORT } from "./outbound-port/create-board-task-map.outbound-port";
import { CreateBoardTaskMapRepository } from "./outbound-adapter/create-board-task-map.repository";
import { PostBoardTaskMapController } from "./controller/post-board-task-map.controller";
import { Module } from "@nestjs/common";
import { BoardTaskMapRepository } from "./board-task-map.repository";

@Module({
    imports : [
        TypeOrmExModule.forCustomRepository([BoardTaskMapRepository])
    ],
    controllers : [PostBoardTaskMapController],
    providers : [
        {
            provide : CREATE_BOARD_TASK_MAP_INBOUND_PORT,
            useClass : CreateBoardTaskMapService
        },
        {
            provide : CREATE_BOARD_TASK_MAP_OUTBOUND_PORT,
            useClass : CreateBoardTaskMapRepository
        }
    ]
})
export class BoardTaskMapModule{}