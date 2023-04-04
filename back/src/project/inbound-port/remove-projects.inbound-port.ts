import { IsNotEmpty } from "class-validator";

//export type RemoveProjectInboundPortInputDto = { id : number };

export class RemoveProjectIPInputDto {
    @IsNotEmpty()
    id : number;
}

//export type RemoveProjectInboundPortOutputDto = { result : boolean };

export class RemoveProjectIPOutputDto {
    @IsNotEmpty()
    result : boolean;
}

export const REMOVE_PROJECT_INBOUND_PORT = 'REMOVE_PROJECT_INBOUND_PORT' as const;

export interface RemoveProjectInboundPort{
    remove(
        params : RemoveProjectIPInputDto,
    ): Promise<RemoveProjectIPOutputDto>;
}