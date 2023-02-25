export const VALIDATE_ACCOUNT_OUTBOUND_PORT = 'VALIDATE_ACCOUNT_OUTBOUND_PORT' as const;

export type ValidateAccountOutboundPortInputDto= {
  account : string;
};
export type ValidateAccountOutboundPortOutputDto = {
  status : boolean;
  code : string;
};
export interface ValidateAccountOutboundPort {
  validate(
    params: ValidateAccountOutboundPortInputDto,
  ): Promise<ValidateAccountOutboundPortOutputDto>;
}