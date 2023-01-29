import { CustomRepository } from 'src/typeorm-ex.decorator'
import { Repository } from 'typeorm'
import { Account } from './account.entity'
import { AccountStatus } from './account.model';
import { CreateAccountDto } from './dto/create-account.dto';

@CustomRepository(Account)
export class AccountRepository extends Repository<Account> {
    async CreateAccount(CreateAccountDto : CreateAccountDto) : Promise<Account> {
        const {account, password, certified } = CreateAccountDto;
        console.log("Account this:",this);
        
        
        const result = this.create({
            account,
            password,
            certified
        })

        await this.save(result); // db에 만들어진 객체를 저장
        return result
    }
}