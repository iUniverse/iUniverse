export const AUTH_ACCOUNT_OUTBOUND_PORT = 'AUTH_ACCOUNT_OUTBOUND_PORT' as const;

export type AuthAccountOutboundPortInputDto= {
  account : string;
};
export type SignUpOutboundPortOutputDto = {
  status : boolean;
  code : string;
};
export interface AuthAccountOutboundPort {
  authAccount(
    params: AuthAccountOutboundPortInputDto,
  ): Promise<SignUpOutboundPortOutputDto>;
}