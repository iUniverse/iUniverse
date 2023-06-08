import { CustomRepository } from 'src/typeorm-ex.decorator'
import { Repository } from 'typeorm'
import { Account } from './account.entity'
import { ValidateAccountDto } from './dto/validate-account.dto';
export type SignUpRopositoryOutputDto = {
  status:boolean;
  code:string;
};


@CustomRepository(Account)
export class AccountRepository extends Repository<Account> {
  validate = async (validateAccountDto : ValidateAccountDto) : Promise<SignUpRopositoryOutputDto> => {
    try{
      const {account } = validateAccountDto;
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
}