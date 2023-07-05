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
import { PatchBoardTaskMapController } from "./controller/patch-board-task-map.controller";
import { UPDATE_BOARD_TASK_MAP_INBOUND_PORT } from "./inbound-port/update-board-task-map.inbound-port";
import { UpdateBoardTaskMapRepository } from "./outbound-adapter/update-board-task-map.repository";
import { UPDATE_BOARD_TASK_MAP_OUTBOUND_PORT } from "./outbound-port/update-board-task-map.outbound-port";
import { UpdateBoardTaskMapService } from "./service/update-board-task-map.service";

@Module({
    imports : [
        TypeOrmExModule.forCustomRepository([BoardTaskMapRepository])
    ],
    controllers : [PostBoardTaskMapController, GetBoardTaskMapController, PatchBoardTaskMapController],
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
        },
        {
            provide : UPDATE_BOARD_TASK_MAP_INBOUND_PORT,
            useClass : UpdateBoardTaskMapService
        },
        {
            provide : UPDATE_BOARD_TASK_MAP_OUTBOUND_PORT,
            useClass : UpdateBoardTaskMapRepository
        }
    ]
})
export class BoardTaskMapModule{}