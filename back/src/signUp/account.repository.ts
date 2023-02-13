import { CustomRepository } from 'src/typeorm-ex.decorator'
import { Repository } from 'typeorm'
import { Account } from './account.entity'
import { AuthAccountDto } from './dto/create-account.dto';
import { CreateAccountDto } from './dto/create-account.dto';
export type SignUpRopositoryOutputDto = {
  status:boolean;
  code:string;
};


@CustomRepository(Account)
export class AccountRepository extends Repository<Account> {
  AuthAccount = async (AuthAccountDto : AuthAccountDto) : Promise<SignUpRopositoryOutputDto> => {
    try{
      const {account } = AuthAccountDto;
      const result = await this.findOne({where:[{"account":account}]});
      if(!result) return {status:true,code:"000"} ;
      else return {status:false,code:"101"} ;
    }
    catch(e){
      const msg = "Error:: Auth Account Error";
      const type = "POST";
      const category = "";
      const uri = "/signUp";
      console.log(e);
      return {status:false,code:"000"} ;
    }
  }
  CreateAccount = async (CreateAccountDto : CreateAccountDto) : Promise<SignUpRopositoryOutputDto> => {
    try{
      const {account, password } = CreateAccountDto;
      const createAccount = this.create({account,password,certified : false});
      const result = await this.save(createAccount);

      return {status:true,code:"000"} ;
    }
    catch(e){
      const msg = "Error:: Create Account Error";
      const type = "POST";
      const category = "";
      const uri = "/signUp";
      console.log(e);
      return {status:false,code:"200"} ;
    }
  }
}