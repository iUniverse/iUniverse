import { CustomRepository } from 'src/typeorm-ex.decorator'
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm'
import { Account } from './account.entity'
import { AuthAccountDto } from './dto/create-account.dto';
import { CreateAccountDto } from './dto/create-account.dto';
export type SignUpRepositoryOutputDto = {
  status:boolean;
  code:string;
};


@CustomRepository(Account)
export class AccountRepository extends Repository<Account> {
  AuthAccount = async (AuthAccountDto : AuthAccountDto) : Promise<SignUpRepositoryOutputDto> => {
    try{
      const {account} = AuthAccountDto;
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
  CreateAccount = async (CreateAccountDto : CreateAccountDto) : Promise<SignUpRepositoryOutputDto> => {
    try{
      const {account, password } = CreateAccountDto;
      const hashPassword = await bcrypt.hash(password, 10,);
      const createAccount = this.create({account,"password":hashPassword,"certified" : false, type:"iUniverse",});
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