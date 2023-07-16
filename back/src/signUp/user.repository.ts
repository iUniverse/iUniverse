import { CustomRepository } from 'src/typeorm-ex.decorator'
import { Repository } from 'typeorm'
import { User } from './user.entity'
import { CreateUserDto } from './dto/create-user.dto';
export type SignUpRepositoryOutputDto = {
  status:boolean;
  code:string;
};


@CustomRepository(User)
export class UserRepository extends Repository<User> {
  CreateUser = async (CreateUserDto : CreateUserDto) : Promise<SignUpRepositoryOutputDto> => {
    try{
      const {email, lastName, firstName, nickName, mobile, mobileCarrier} = CreateUserDto;
      const createAccount = this.create({email,lastName,firstName,nickName, mobile, mobileCarrier});
      const result = await this.save(createAccount);
      return {status:true,code:"000"} ;
    }
    catch(e){
      const msg = "Error:: Create Account Error";
      const type = "POST";
      const category = "";
      const uri = "/signUp";
      console.log(e);
      return {status:false,code:"300"} ;
    }
  }
}