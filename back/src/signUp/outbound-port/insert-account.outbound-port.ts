export const CREATE_ACCOUNT_OUTBOUND_PORT = 'CREATE_ACCOUNT_OUTBOUND_PORT' as const;

export type CreateAccountOutboundPortInputDto= {
  account : string;
  password : string;
};
export type SignUpOutboundPortOutputDto = {
  status : boolean;
  code : string;
};
export interface CreateAccountOutboundPort {
  createAccount(
    params: CreateAccountOutboundPortInputDto,
  ): Promise<SignUpOutboundPortOutputDto>;
}