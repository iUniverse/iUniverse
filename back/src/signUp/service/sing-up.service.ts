import {
    SignUpInboundPort,
    SignUpInboundPortInputDto,
    SignUpInboundPortOutputDto,
  } from '../inbound-port/sign-up.inbound-port';
  import { Inject } from '@nestjs/common';
  import {
    CREATE_ACCOUNT_OUTBOUND_PORT,
    CreateAccountOutboundPort,
  } from '../outbound-port/insert-account.outbound-port';
  
  export class SignUpService implements SignUpInboundPort {
    constructor(
      @Inject(CREATE_ACCOUNT_OUTBOUND_PORT)
      private readonly signUpOutboundPort: CreateAccountOutboundPort,
    ) {}
  
    async execute(
      params: SignUpInboundPortInputDto,
    ): Promise<SignUpInboundPortOutputDto> {
      return this.signUpOutboundPort.execute(params);
    }
  }