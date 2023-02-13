import {
    AuthAccountOutboundPort,
    AuthAccountOutboundPortInputDto,
    SignUpOutboundPortOutputDto
  } from '../outbound-port/auth-account.outbound-port';
  import { Injectable } from '@nestjs/common';
  import { AccountRepository } from '../account.repository';
  
  
  @Injectable()
  export class AuthAccountRepository implements AuthAccountOutboundPort {
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
  }