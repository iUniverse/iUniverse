import { CustomRepository } from 'src/typeorm-ex.decorator'
import { Repository } from 'typeorm'
import { Account } from './account.entity'
import { AccountStatus } from './account.model';
import { CreateAccountDto } from './dto/create-account.dto';


@CustomRepository(Account)
export class AccountRepository extends Repository<Account> {
    CreateAccount = async (CreateAccountDto : CreateAccountDto) : Promise<Account> => {
        console.log(11111,this);
        
        const {account, password, certified } = CreateAccountDto;
        const result = this.create({
            account,
            password,
            certified
        })

        await this.save(result); // db에 만들어진 객체를 저장
        return result
    }
}