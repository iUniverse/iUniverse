import { CustomRepository } from 'src/typeorm-ex.decorator'
import { Repository } from 'typeorm'
import { Account } from './account.entity'
import { CreateAccountDto } from './dto/create-account.dto';
export type CreateAccountRopositoryOutputDto = {
  result : boolean;
};



@CustomRepository(Account)
export class AccountRepository extends Repository<Account> {
    CreateAccount = async (CreateAccountDto : CreateAccountDto) : Promise<CreateAccountRopositoryOutputDto> => {
      try{
        const {account, password } = CreateAccountDto;
        const createAccount = this.create({account,password,certified : false});
        const result = await this.save(createAccount);
        
        return { "result" : true };
      }
      catch(e){
        const msg = "Error:: Create Account Error";
        const type = "POST";
        const category = "";
        const uri = "/signUp";
        console.log(e);
        return { "result" : false };
      }
    }
}