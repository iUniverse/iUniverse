import { IsNotEmpty } from 'class-validator'
export class CreateUserDto{
    @IsNotEmpty()
    email : string;

    @IsNotEmpty()
    lastName : string;

    @IsNotEmpty()
    firstName : string;

    @IsNotEmpty()
    nickName : string;

    mobile? : string;

    mobileCarrier? : string;
}