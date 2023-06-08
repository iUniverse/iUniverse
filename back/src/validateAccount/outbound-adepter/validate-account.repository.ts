import {
    ValidateAccountOutboundPort,
    ValidateAccountOutboundPortInputDto,
    ValidateAccountOutboundPortOutputDto
  } from '../outbound-port/validate-account.outbound-port';
  import { Injectable } from '@nestjs/common';
  import { AccountRepository } from '../account.repository';
  
  
  @Injectable()
  export class AuthAccountRepository implements ValidateAccountOutboundPort {
    constructor(
     private readonly accountRepository : AccountRepository,
    )
    {}
    async validate(
      params: ValidateAccountOutboundPortInputDto,
    ): Promise<ValidateAccountOutboundPortOutputDto> {
      const result = await this.accountRepository.validate(params);
      return result;
    }
  }