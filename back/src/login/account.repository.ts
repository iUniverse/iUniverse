import { FindOneOptions, Repository } from 'typeorm';
import { Account } from './account.entity';
import { LoginDto } from './dto/login.dto';

import { CustomRepository } from '../typeorm-ex.decorator';

@CustomRepository(Account)
export class AccountRepository extends Repository<Account> {
  async createUser(loginDto: LoginDto): Promise<void> {
    const { account, password } = loginDto;
    const user = this.create({ account: account, password });

    await this.save(user);
  }

  async findAccount(options: FindOneOptions): Promise<Account | undefined> {
    return await this.findOne(options);
  }
}
