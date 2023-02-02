export type FindProjectsOutboundPortInputDto = void;

export type FindProjectsOutboundPortOutputDto = Array<{
    
}>;

export const FIND_PROJECTS_OUTBOUND_PORT = 'FIND_PROJECTS_OUTBOUND_PORT' as const;

export interface FindProjectsOutboundPort{
    execute(
        params : FindProjectsOutboundPortInputDto,
    ): Promise<FindProjectsOutboundPortOutputDto>;
}
