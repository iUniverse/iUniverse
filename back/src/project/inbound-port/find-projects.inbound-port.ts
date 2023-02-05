import { FindProjectDto } from "../dto/find-project.dto";

export type FindProjectInboundPortInputDto = { id : number };
export type FindProjectInboundPortOutputDto = FindProjectDto;

export const FIND_PROJECT_INBOUND_PORT = 'FIND_PROJECT_INBOUND_PORT' as const;

export interface FindProjectInboundPort{
    find(
        params : FindProjectInboundPortInputDto,
    ): Promise<FindProjectInboundPortOutputDto>;
}