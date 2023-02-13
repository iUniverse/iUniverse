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
import {
  CREATE_USER_OUTBOUND_PORT,
  CreateUserOutboundPort,
} from '../outbound-port/insert-user.outbound-port';

export class SignUpService implements SignUpInboundPort {
  constructor(
  @Inject(CREATE_ACCOUNT_OUTBOUND_PORT)
  private readonly createAccountOutboundPort: CreateAccountOutboundPort,
  @Inject(CREATE_USER_OUTBOUND_PORT)
  private readonly createUserOutboundPort: CreateUserOutboundPort) {}

  async create(
    params: SignUpInboundPortInputDto,
  ): Promise<SignUpInboundPortOutputDto> {
    const {account} = params;
    const authResult = await this.createAccountOutboundPort.authAccount({"account":account});
    if(!authResult.status) return authResult;
    const accountResult = await this.createAccountOutboundPort.createAccount(params);
    if(!accountResult.status) return accountResult;
    const userResult = await this.createUserOutboundPort.createUser(params);
    return userResult;
  }
}