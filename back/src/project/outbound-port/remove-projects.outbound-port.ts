export type RemoveProjectOutboundPortInputDto = { id : number };
export type RemoveProjectOutboundPortOutputDto = { result : boolean };

export const REMOVE_PROJECT_OUTBOUND_PORT = 'REMOVE_PROJECT_OUTBOUND_PORT' as const;

export interface RemoveProjectOutboundPort{
    remove(
        param : RemoveProjectOutboundPortInputDto,
    ): Promise<RemoveProjectOutboundPortOutputDto>;
}
