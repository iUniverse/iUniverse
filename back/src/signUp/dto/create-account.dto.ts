import { IsNotEmpty } from 'class-validator'

export class CreateAccountDto{
    @IsNotEmpty()
    account : string;

    @IsNotEmpty()
    password : string;
}