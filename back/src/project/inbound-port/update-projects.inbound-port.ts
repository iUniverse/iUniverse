import { IsNotEmpty } from "class-validator";

export class UpdateProjectIPInputDto {
    @IsNotEmpty()
    id : number;
    @IsNotEmpty()
    key : string;
    @IsNotEmpty()
    value : string;
}

export class UpdateProjectIPOutputDto {
    result : boolean;
}

export const UPDATE_PROJECTS_INBOUND_PORT = 'UPDATE_PROJECTS_INBOUND_PORT' as const;

export interface UpdateProjectsInboundPort {
    update(
        params : UpdateProjectIPInputDto
    ) : Promise<UpdateProjectIPOutputDto>;
}