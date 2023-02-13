import { IsNotEmpty } from 'class-validator'
export class CreateUserDto{
    @IsNotEmpty()
    email : string;

    @IsNotEmpty()
    familyName : string;

    @IsNotEmpty()
    givenName : string;

    @IsNotEmpty()
    nickName : string;
}