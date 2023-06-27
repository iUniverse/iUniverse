import { Inject } from "@nestjs/common";
import { CreateBoard, CreateBoardInboundPort, InitCreateBoard, ResultCreateBoard, ResultInitCreateBoard } from "../inbound-port/create-board.inbound-port";
import { CREATE_BOARD_OUTBOUND_PORT, CreateBoardOutboundPort } from "../outbound-port/create-board.outbound-port";
import { initCreateBoard } from "../module/board";

export class CreateBoardService implements CreateBoardInboundPort{
    constructor(
        @Inject(CREATE_BOARD_OUTBOUND_PORT)
        private readonly createboardOutboundPort : CreateBoardOutboundPort
    ){}

    async create(data : CreateBoard) : Promise<ResultCreateBoard> {
        return this.createboardOutboundPort.create(data);
    }

    async createInit(data : InitCreateBoard) : Promise<ResultInitCreateBoard>{
        
        const init_data_list = await initCreateBoard(data);
        let funcs = [];
        for(const init_data of init_data_list){
            funcs.push(this.createboardOutboundPort.createInit(init_data));
        }
        Promise.all(funcs).then((result) => {
            return result;
        })        
        //return this.createboardOutboundPort.createInit(data);
    }
}