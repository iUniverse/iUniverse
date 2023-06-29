import { IsNotEmpty } from "class-validator";

export class UpdateBoard {
    @IsNotEmpty()
    id : number;
    @IsNotEmpty()
    key : string;
    @IsNotEmpty()
    value : any;
}

export const UPDATE_BOARD_INBOUND_PORT = 'UPDATE_BOARD_INBOUND_PORT' as const;

export interface UpdateBoardInboundPort {
    update(data : UpdateBoard) : Promise<boolean>
}