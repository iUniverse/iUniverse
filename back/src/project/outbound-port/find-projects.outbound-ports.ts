import { FindProjectDto } from "../dto/find-project.dto";

export type FindProjectOutboundPortInputDto = { id : number };
export type FindProjectOutboundPortOutputDto = FindProjectDto;

export const FIND_PROJECT_OUTBOUND_PORT = 'FIND_PROJECT_OUTBOUND_PORT' as const;

export interface FindProjectOutboundPort{
    find(
        param : FindProjectOutboundPortInputDto,
    ): Promise<FindProjectOutboundPortOutputDto>;
}
