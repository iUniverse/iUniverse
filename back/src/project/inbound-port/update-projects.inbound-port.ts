export type UpdateProjectsInboundPortInputDto = {
    id : number;
    key : string;
    value : string;
}

export type UpdateProjectsInboundPortOutputDto = {
    result : boolean;
}

export const UPDATE_PROJECTS_INBOUND_PORT = 'UPDATE_PROJECTS_INBOUND_PORT' as const;

export interface UpdateProjectsInboundPort {
    update(
        params : UpdateProjectsInboundPortInputDto
    ) : Promise<UpdateProjectsInboundPortOutputDto>;
}