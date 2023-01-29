import {
  CreateAccountOutboundPort,
  CreateAccountOutboundPortInputDto,
  CreateAccountOutboundPortOutputDto,
} from '../outbound-port/insert-account.outbound-port';
import { AccountRepository } from '../account.repository';
import { Account, AccountStatus } from '../account.model';
import { CreateAccountDto } from '../dto/create-account.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CreateAccountRepository implements CreateAccountOutboundPort {
  constructor(
    @InjectRepository(AccountRepository)private readonly accountRepository : AccountRepository
  )
  {

  }
  async execute(
    params: CreateAccountOutboundPortInputDto,
  ): Promise<CreateAccountOutboundPortOutputDto> {

    console.log(this.accountRepository);
    
    
    const result = await this.accountRepository.CreateAccount(params);

    return result;
  }
}