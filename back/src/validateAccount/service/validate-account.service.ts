import { Inject } from '@nestjs/common';
import {
    ValidateAccountInboundPort,
    ValidateAccountInboundPortInputDto,
    ValidateAccountInboundPortOutputDto,
} from '../inbound-port/validate-account.inbound';
import {
  VALIDATE_ACCOUNT_OUTBOUND_PORT,
  ValidateAccountOutboundPort,
} from '../outbound-port/validate-account.outbound-port';

export class ValidateAccountService implements ValidateAccountInboundPort {
  constructor(
    @Inject(VALIDATE_ACCOUNT_OUTBOUND_PORT)
    private readonly validateAccountOutboundPort: ValidateAccountOutboundPort
    ) {}

  async validate(
    params: ValidateAccountInboundPortInputDto,
  ): Promise<ValidateAccountInboundPortOutputDto> {
    const {account} = params;
    const authResult = await this.validateAccountOutboundPort.validate({"account":account});
      console.log(1111111111111111111111111111111111111111);
    console.log(authResult);
    return authResult;
  }
}