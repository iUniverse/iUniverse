import { Body, Controller, Inject, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CREATE_BOARD_TASK_MAP_INBOUND_PORT, CreateBoardTaskMap, CreateBoardTaskMapInboundPort, ResultCreateBoardTaskMap } from "../inbound-port/create-board-task-map.inbound-port";

@Controller('iuni_board_task_map')
export class PostBoardTaskMapController {
    constructor(
        @Inject(CREATE_BOARD_TASK_MAP_INBOUND_PORT)
        private readonly createBoardTaskMapInboundPort : CreateBoardTaskMapInboundPort
    ){}

    @Post('/')
    @UsePipes(ValidationPipe)
    async create(@Body() data : CreateBoardTaskMap) : Promise<ResultCreateBoardTaskMap>{
        try{
            return await this.createBoardTaskMapInboundPort.create(data);
        } 
        catch(e){
            console.log(e);
            throw Error(e);
        }
    }
}