
export type RemoveProjectInboundPortInputDto = { id : number };
export type RemoveProjectInboundPortOutputDto = { result : boolean };

export const REMOVE_PROJECT_INBOUND_PORT = 'REMOVE_PROJECT_INBOUND_PORT' as const;

export interface RemoveProjectInboundPort{
    remove(
        params : RemoveProjectInboundPortInputDto,
    ): Promise<RemoveProjectInboundPortOutputDto>;
}