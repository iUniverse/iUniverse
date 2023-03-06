import { IsNotEmpty } from "class-validator";

// export type UpdateProjectsInboundPortInputDto = {
//     id : number;
//     key : string;
//     value : string;
// }

export class UpdateProjectInputDto {
    @IsNotEmpty()
    id : number;
    @IsNotEmpty()
    key : string;
    @IsNotEmpty()
    value : string;
}

// export type UpdateProjectsInboundPortOutputDto = {
//     result : boolean;
// }

export class UpdateProjectOutputDto {
    result : boolean;
}


export const UPDATE_PROJECTS_INBOUND_PORT = 'UPDATE_PROJECTS_INBOUND_PORT' as const;

export interface UpdateProjectsInboundPort {
    update(
        params : UpdateProjectInputDto
    ) : Promise<UpdateProjectOutputDto>;
}