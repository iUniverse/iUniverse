import { IsNotEmpty } from "class-validator";

//export type RemoveProjectInboundPortInputDto = { id : number };

export class RemoveProjectInputDto {
    @IsNotEmpty()
    id : number;
}

//export type RemoveProjectInboundPortOutputDto = { result : boolean };

export class RemoveProjectOutputDto {
    @IsNotEmpty()
    result : boolean;
}

export const REMOVE_PROJECT_INBOUND_PORT = 'REMOVE_PROJECT_INBOUND_PORT' as const;

export interface RemoveProjectInboundPort{
    remove(
        params : RemoveProjectInputDto,
    ): Promise<RemoveProjectOutputDto>;
}