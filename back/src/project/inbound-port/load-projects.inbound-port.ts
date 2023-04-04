import { FindProjectDto } from "../dto/find-project.dto";

export type LoadProjectsIPInputDto = void;
export type LoadProjectsIPOutputDto = { 'favorite_projects' : Array<FindProjectDto>, 'normal_projects' : Array<FindProjectDto>};

export const LOAD_PROJECTS_INBOUND_PORT = 'LOAD_PROJECTS_INBOUND_PORT' as const;

export interface LoadProjectsInboundPort{
    load(
        params : LoadProjectsIPInputDto,
    ): Promise<LoadProjectsIPOutputDto>;
}