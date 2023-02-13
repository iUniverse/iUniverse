import {
  CreateAccountOutboundPort,
  CreateAccountOutboundPortInputDto,
  AuthAccountOutboundPortInputDto,
  SignUpOutboundPortOutputDto
} from '../outbound-port/insert-account.outbound-port';
import { Injectable } from '@nestjs/common';
import { AccountRepository } from '../account.repository';


@Injectable()
export class CreateAccountRepository implements CreateAccountOutboundPort {
  constructor(
   private readonly accountRepository : AccountRepository,
  )
  {}
  async authAccount(
    params: AuthAccountOutboundPortInputDto,
  ): Promise<SignUpOutboundPortOutputDto> {
    const result = await this.accountRepository.AuthAccount(params);
    return result;
  }
  async createAccount(
    params: CreateAccountOutboundPortInputDto,
  ): Promise<SignUpOutboundPortOutputDto> {
    const result = await this.accountRepository.CreateAccount(params);
    return result;
  }
}