import { IsNotEmpty } from 'class-validator'

export class ValidateAccountDto{
    @IsNotEmpty()
    account : string;
}