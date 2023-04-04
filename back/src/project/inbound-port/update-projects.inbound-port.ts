import { IsNotEmpty } from "class-validator";

// export type UpdateProjectsInboundPortInputDto = {
//     id : number;
//     key : string;
//     value : string;
// }

export class UpdateProjectIPInputDto {
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

export class UpdateProjectIPOutputDto {
    result : boolean;
}


export const UPDATE_PROJECTS_INBOUND_PORT = 'UPDATE_PROJECTS_INBOUND_PORT' as const;

export interface UpdateProjectsInboundPort {
    update(
        params : UpdateProjectIPInputDto
    ) : Promise<UpdateProjectIPOutputDto>;
}