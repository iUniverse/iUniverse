export const CREATE_USER_OUTBOUND_PORT = 'CREATE_USER_OUTBOUND_PORT' as const;

export type CreateUserOutboundPortInputDto= {
    email:string;
    lastName : string;
    firstName: string;
    nickName: string;
    mobileCarrier:string|null;
    mobile:string|null;
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