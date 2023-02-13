import { Inject } from '@nestjs/common';
import {
    SignUpInboundPort,
    SignUpInboundPortInputDto,
    SignUpInboundPortOutputDto,
} from '../inbound-port/sign-up.inbound-port';
import {
  CREATE_ACCOUNT_OUTBOUND_PORT,
  CreateAccountOutboundPort,
} from '../outbound-port/insert-account.outbound-port';

export class SignUpService implements SignUpInboundPort {
  constructor(
  @Inject(CREATE_ACCOUNT_OUTBOUND_PORT)
  private readonly signUpOutboundPort: CreateAccountOutboundPort) {}

  async create(
    params: SignUpInboundPortInputDto,
  ): Promise<SignUpInboundPortOutputDto> {
    return this.signUpOutboundPort.create(params);
  }
}