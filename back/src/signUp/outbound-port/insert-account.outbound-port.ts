import { CreateAccountDto } from '../dto/create-account.dto';
import { Account } from '../account.model';

export type CreateAccountOutboundPortInputDto= CreateAccountDto;
export type CreateAccountOutboundPortOutputDto = Account;

export const CREATE_ACCOUNT_OUTBOUND_PORT = 'CREATE_ACCOUNT_OUTBOUND_PORT' as const;

export interface CreateAccountOutboundPort {
  execute(
    params: CreateAccountOutboundPortInputDto,
  ): Promise<CreateAccountOutboundPortOutputDto>;
}