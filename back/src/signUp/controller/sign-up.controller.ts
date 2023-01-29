import { Controller, Get, Inject } from '@nestjs/common';
import {
  SIGN_UP_INBOUND_PORT,
  SignUpInboundPort,
} from '../inbound-port/sign-up.inbound-port';

@Controller()
export class GetMembersController {
  constructor(
    @Inject(SIGN_UP_INBOUND_PORT)
    private readonly signUpInboundPort: SignUpInboundPort,
  ) {}

  @Get('/account')
  async handle(params) {
    params = {
      id:"test",
      password:"1234",
      certified:true
    }
    return this.signUpInboundPort.execute(params);
  }
}