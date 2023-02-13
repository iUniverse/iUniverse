export type CreateAccountOutboundPortInputDto= {
  account : string;
  password : string;
};
export type CreateAccountOutboundPortOutputDto = {
  result : boolean;
};


export const CREATE_ACCOUNT_OUTBOUND_PORT = 'CREATE_ACCOUNT_OUTBOUND_PORT' as const;

export interface CreateAccountOutboundPort {
  create(
    params: CreateAccountOutboundPortInputDto,
  ): Promise<CreateAccountOutboundPortOutputDto>;
}