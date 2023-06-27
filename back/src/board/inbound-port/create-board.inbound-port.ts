import { IsNotEmpty } from "class-validator";

export class CreateBoard { 
    @IsNotEmpty()
    readonly name : string;
    @IsNotEmpty()
    readonly creatorId : number;
    @IsNotEmpty()
    readonly projectId : number;
}

export class ResultCreateBoard {
    readonly id : number;
    readonly name : string;
    readonly createDate : Date;
    readonly projectId : number;
}

export const CREATE_BOARD_INBOUND_PORT = 'CREATE_BOARD_INBOUND_PORT' as const;

export interface CreateBoardInboundPort{
    create(data : CreateBoard) : Promise<ResultCreateBoard>
}

