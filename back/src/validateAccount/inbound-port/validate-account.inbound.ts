export type ValidateAccountInboundPortInputDto = {
    account : string;
};
export type ValidateAccountInboundPortOutputDto = {
    status:boolean;
    code : string;
};
  
export const VALIDATE_ACCOUNT_INBOUND_PORT = 'VALIDATE_ACCOUNT_INBOUND_PORT' as const;
  
export interface ValidateAccountInboundPort {
    validate(
      params: ValidateAccountInboundPortInputDto,
    ): Promise<ValidateAccountInboundPortOutputDto>;
}