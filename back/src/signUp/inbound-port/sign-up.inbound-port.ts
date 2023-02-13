export type SignUpInboundPortInputDto = {
  account : string;
  password : string;
};
export type SignUpInboundPortOutputDto = {
  result : boolean;
};

export const SIGN_UP_INBOUND_PORT = 'SIGN_UP_INBOUND_PORT' as const;

export interface SignUpInboundPort {
  create(
    params: SignUpInboundPortInputDto,
  ): Promise<SignUpInboundPortOutputDto>;
}