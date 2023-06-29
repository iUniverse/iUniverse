import { TypeOrmExModule } from "src/typeorm-ex.module";
import { CREATE_BOARD_TASK_MAP_INBOUND_PORT } from "./inbound-port/create-board-task-map.inbound-port";
import { CreateBoardTaskMapService } from "./service/create-board-task-map.service";
import { CREATE_BOARD_TASK_MAP_OUTBOUND_PORT } from "./outbound-port/create-board-task-map.outbound-port";
import { CreateBoardTaskMapRepository } from "./outbound-adapter/create-board-task-map.repository";
import { PostBoardTaskMapController } from "./controller/post-board-task-map.controller";
import { Module } from "@nestjs/common";
import { BoardTaskMapRepository } from "./board-task-map.repository";
import { GetBoardTaskMapController } from "./controller/get-board-task-map.controller";
import { FIND_BOARD_TASK_MAP_INBOUND_PORT } from "./inbound-port/find-board-task-map.inbound-port";
import { FindBoardTaskMapService } from "./service/find-board-task-map.service";
import { FIND_BOARD_TASK_MAP_OUTBOUND_PORT } from "./outbound-port/find-board-task-map.outbound-port";
import { FindBoardTaskMapRepository } from "./outbound-adapter/find-board-task-map.repository";

@Module({
    imports : [
        TypeOrmExModule.forCustomRepository([BoardTaskMapRepository])
    ],
    controllers : [PostBoardTaskMapController, GetBoardTaskMapController],
    providers : [
        {
            provide : CREATE_BOARD_TASK_MAP_INBOUND_PORT,
            useClass : CreateBoardTaskMapService
        },
        {
            provide : CREATE_BOARD_TASK_MAP_OUTBOUND_PORT,
            useClass : CreateBoardTaskMapRepository
        },
        {
            provide : FIND_BOARD_TASK_MAP_INBOUND_PORT,
            useClass : FindBoardTaskMapService
        },
        {
            provide : FIND_BOARD_TASK_MAP_OUTBOUND_PORT,
            useClass : FindBoardTaskMapRepository
        }
    ]
})
export class BoardTaskMapModule{}