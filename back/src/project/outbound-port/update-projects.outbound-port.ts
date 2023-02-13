export type UpdateProjectsOutboundPortInputDto = {
    id : number;
    key : string;
    value : string;
}

export type UpdateProjectsOutboundPortOutputDto = {
    result : boolean;
}

export const UPDATE_PROJECTS_OUTBOUND_PORT = 'UPDATE_PROJECTS_OUTBOUND_PORT' as const;

export interface UpdateProjectsOutboundPort{
    update(
        params : UpdateProjectsOutboundPortInputDto,
    ) : Promise<UpdateProjectsOutboundPortOutputDto>;
}
