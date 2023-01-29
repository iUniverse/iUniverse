import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { CreateAccountDto } from '../dto/create-account.dto';
import {
  SIGN_UP_INBOUND_PORT,
  SignUpInboundPort,
} from '../inbound-port/sign-up.inbound-port';

@Controller('account')
export class GetMembersController {
  constructor(
    @Inject(SIGN_UP_INBOUND_PORT)
    private readonly signUpInboundPort: SignUpInboundPort,
  ) {}

  @Post()
  async handle(@Body() createAccountDto : CreateAccountDto) {
    return this.signUpInboundPort.execute(createAccountDto);
  }
}