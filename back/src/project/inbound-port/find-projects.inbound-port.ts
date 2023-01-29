export type FindProjectsInboundPortInputDto = void;
export type FindProjectsInboundPortOutputDto = Array<{
    name:string;
}>;

export const FIND_PROJECTS_INBOUND_PORT = 'FIND_PROJECTS_INBOUND_PORT' as const;

export interface FindProjectsInboundPort{
    execute(
        params : FindProjectsInboundPortInputDto,
    ): Promise<FindProjectsInboundPortOutputDto>;
}