import { Body, Controller, Get, Inject, Post, Headers } from '@nestjs/common';
import {
  SIGN_UP_INBOUND_PORT,
  SignUpInboundPort,
  SignUpInboundPortInputDto
} from '../inbound-port/sign-up.inbound-port';

const errorStatus = {
  "URI":"signUp",
  "Type":"POST",
}
@Controller('signUp')
export class SignUpController {
  constructor(
    @Inject(SIGN_UP_INBOUND_PORT)
    private readonly signUpInboundPort: SignUpInboundPort,
  ) {}

  @Post()
  async handle(@Body() SignUpInboundPortInputDto : SignUpInboundPortInputDto, @Headers() headers) {
    // console.log(headers);
    // headers["Error-Status"] =
    return this.signUpInboundPort.create(SignUpInboundPortInputDto);
  }
}