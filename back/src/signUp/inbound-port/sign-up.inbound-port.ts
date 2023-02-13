export type SignUpInboundPortInputDto = {
  account : string;
  password : string;
  id : number;
  email:string;
  familyName : string;
  givenName: string;
  nickName: string;
};
export type SignUpInboundPortOutputDto = {
  status:boolean;
  code : string;
};

export const SIGN_UP_INBOUND_PORT = 'SIGN_UP_INBOUND_PORT' as const;

export interface SignUpInboundPort {
  create(
    params: SignUpInboundPortInputDto,
  ): Promise<SignUpInboundPortOutputDto>;
}