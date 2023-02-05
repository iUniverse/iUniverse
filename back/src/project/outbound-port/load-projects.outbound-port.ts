import { FindProjectDto } from '../dto/find-project.dto';
import { Project } from '../project.entity';

export type LoadProjectsOutboundPortInputDto = void;
export type LoadProjectsOutboundPortOutputDto = Array<FindProjectDto>;

export const LOAD_PROJECTS_OUTBOUND_PORT = 'LOAD_PROJECTS_OUTBOUND_PORT' as const;

export interface LoadProjectsOutboundPort {
    load(): Promise<LoadProjectsOutboundPortOutputDto>;
}