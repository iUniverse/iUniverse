import { TypeOrmExModule } from "src/typeorm-ex.module";
import { PostBoardController } from "./controller/post-board.controller";
import { Module } from "@nestjs/common";
import { CREATE_BOARD_INBOUND_PORT } from "./inbound-port/create-board.inbound-port";
import { CreateBoardService } from "./service/create-board.service";
import { CreateBoardRepository } from "./outbound-adapter/create-board.repository";
import { CREATE_BOARD_OUTBOUND_PORT } from "./outbound-port/create-board.outbound-port";
import { BoardRepository } from "./board.repository";
import { GetBoardController } from "./controller/get-board.controller";
import { FIND_BOARD_INBOUND_PORT } from "./inbound-port/find-board.inbound-port";
import { FindBoardRepository } from "./outbound-adapter/find-board.repository";
import { FindBoardService } from "./service/find-board.service";
import { FIND_BOARD_OUTBOUND_PORT } from "./outbound-port/find-board.outbound-port";
import { REMOVE_BOARD_INBOUND_PORT } from "./inbound-port/remove-board.inbound-port";
import { RemoveBoardService } from "./service/remove-board.service";
import { REMOVE_BOARD_OUTBOUND_PORT } from "./outbound-port/remove-board.outbound-port";
import { RemoveBoardRepository } from "./outbound-adapter/remove-board.repository";
import { DeleteBoardController } from "./controller/delete-board.controller";
import { PatchBoardController } from "./controller/patch-board.controller";
import { UPDATE_BOARD_INBOUND_PORT } from "./inbound-port/update-board.inbound-port";
import { UpdateBoardRepository } from "./outbound-adapter/update-board.repository";
import { UpdateBoardService } from "./service/update-board.service";
import { UPDATE_BOARD_OUTBOUND_PORT } from "./outbound-port/update-board.outbound-port";

@Module({
    imports : [
        TypeOrmExModule.forCustomRepository([BoardRepository])
    ],
    controllers : [PostBoardController, GetBoardController, DeleteBoardController, PatchBoardController],
    providers : [
        {
            provide : CREATE_BOARD_INBOUND_PORT,
            useClass : CreateBoardService
        },
        {
            provide : CREATE_BOARD_OUTBOUND_PORT,
            useClass : CreateBoardRepository
        },
        {
            provide : FIND_BOARD_INBOUND_PORT,
            useClass : FindBoardService
        },
        {
            provide : FIND_BOARD_OUTBOUND_PORT,
            useClass : FindBoardRepository
        },
        {
            provide : REMOVE_BOARD_INBOUND_PORT,
            useClass : RemoveBoardService
        },
        {
            provide : REMOVE_BOARD_OUTBOUND_PORT,
            useClass : RemoveBoardRepository
        },
        {
            provide : UPDATE_BOARD_INBOUND_PORT,
            useClass : UpdateBoardService
        },
        {
            provide : UPDATE_BOARD_OUTBOUND_PORT,
            useClass : UpdateBoardRepository
        }
    ]
})

export class BoardModule{}