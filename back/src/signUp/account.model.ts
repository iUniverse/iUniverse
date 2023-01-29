export interface Account
{
    id : number;
    account : string;
    password : string;
    certified : boolean;
}

export enum AccountStatus 
{
    PUBLIC = "PUBLIC",
    PRIVATE = "PRIVATE"
}