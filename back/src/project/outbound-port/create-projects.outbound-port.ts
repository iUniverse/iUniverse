import { Project } from '../project.entity';

export type CreateProjectsOutboundPortInputDto = {
    name : string
};
export type CreateProjectsOutboundPortOutputDto = {
    name : string,
};

export const CREATE_PROJECTS_OUTBOUND_PORT = 'CREATE_PROJECTS_OUTBOUND_PORT' as const;

export interface CreateProjectsOutboundPort{
    create(
        params: CreateProjectsOutboundPortInputDto,
    ) : Promise<CreateProjectsOutboundPortOutputDto>;
}