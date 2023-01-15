export type FindMembersOutboundPortInputDto = void;

export type FindMembersOutboundPortOutputDto = Array<{
    id: string;
    email: string;
    password: string;
}>;

export const FIND_MEMBERS_OUTBOUND_PORT = 'FIND_MEMBERS_OUTBOUND_PORT' as const;

export interface FindMembersOutboundPort {
    execute(
        params: FindMembersOutboundPortInputDto,
    ): Promise<FindMembersOutboundPortOutputDto>;
}