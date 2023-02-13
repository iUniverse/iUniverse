export const CREATE_USER_OUTBOUND_PORT = 'CREATE_USER_OUTBOUND_PORT' as const;

export type CreateUserOutboundPortInputDto= {
    email:string;
    familyName : string;
    givenName: string;
    nickName: string;
};
export type SignUpOutboundPortOutputDto = {
  status : boolean;
  code : string;
};
export interface CreateUserOutboundPort {
  createUser(
    params: CreateUserOutboundPortInputDto,
  ): Promise<SignUpOutboundPortOutputDto>;
}