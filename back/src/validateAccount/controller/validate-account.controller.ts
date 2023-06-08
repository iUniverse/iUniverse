import { Body, Controller, Get, Inject, Post, Headers } from '@nestjs/common';
import {
  VALIDATE_ACCOUNT_INBOUND_PORT,
  ValidateAccountInboundPort,
  ValidateAccountInboundPortInputDto
} from '../inbound-port/validate-account.inbound';

const errorStatus = {
  "URI":"validateAccount",
  "Type":"POST",
}
@Controller('validateAccount')
export class ValidateAccountController {
  constructor(
    @Inject(VALIDATE_ACCOUNT_INBOUND_PORT)
    private readonly validateAccountInboundPort: ValidateAccountInboundPort,
  ) {}

  @Post()
  async handle(@Body() validateAccountInboundPortInputDto : ValidateAccountInboundPortInputDto, @Headers() headers) {
    return this.validateAccountInboundPort.validate(validateAccountInboundPortInputDto);
  }
}