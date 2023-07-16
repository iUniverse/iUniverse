export type SignUpInboundPortInputDto = {
  account : string;
  password : string;
  id : number;
  email:string;
  lastName : string;
  firstName: string;
  nickName: string;
  mobileCarrier:string|null;
  mobile:string|null;
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