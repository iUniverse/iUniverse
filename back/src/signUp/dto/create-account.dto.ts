import { IsNotEmpty } from 'class-validator'

export class AuthAccountDto{
    @IsNotEmpty()
    account : string;
}
export class CreateAccountDto{
    @IsNotEmpty()
    account : string;

    @IsNotEmpty()
    password : string;
}