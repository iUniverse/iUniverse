import { IsNotEmpty } from "class-validator";

export class CreateBoard { 
    @IsNotEmpty()
    readonly name : string;
    @IsNotEmpty()
    readonly creatorId : number;
    @IsNotEmpty()
    readonly projectId : number;
}

export class InitCreateBoard {
    @IsNotEmpty()
    readonly type : string;
    @IsNotEmpty()
    readonly projectId : number;
}

export class ResultCreateBoard {
    readonly id : number;
    readonly name : string;
    readonly createDate : Date;
    readonly projectId : number;
}

export class ResultInitCreateBoard{
    readonly result : boolean
}

export const CREATE_BOARD_INBOUND_PORT = 'CREATE_BOARD_INBOUND_PORT' as const;

export interface CreateBoardInboundPort{
    create(data : CreateBoard) : Promise<ResultCreateBoard>

    createInit(data : InitCreateBoard) : Promise<ResultInitCreateBoard>
}

