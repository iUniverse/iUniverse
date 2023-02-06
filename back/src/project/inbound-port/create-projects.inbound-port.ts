export type CreateProjectsInboundPortInputDto = {
    name : string;
};

export type CreateProjectsInboundPortOutputDto = {
    name : string,
    id : number,
    createDate : Date,
};

export const CREATE_PROJECTS_INBOUND_PORT = 'CREATE_PROJECTS_INBOUND_PORT' as const;

export interface CreateProjectsInboundPort{
    create(
        params : CreateProjectsInboundPortInputDto,
    ) : Promise<CreateProjectsInboundPortOutputDto>;
} 
