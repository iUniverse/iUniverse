import { FindProjectDto } from "../dto/find-project.dto";

export type LoadProjectsInboundPortInputDto = void;
export type LoadProjectsInboundPortOutputDto = Array<FindProjectDto>;

export const LOAD_PROJECTS_INBOUND_PORT = 'LOAD_PROJECTS_INBOUND_PORT' as const;

export interface LoadProjectsInboundPort{
    load(
        params : LoadProjectsInboundPortInputDto,
    ): Promise<LoadProjectsInboundPortOutputDto>;
}