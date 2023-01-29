import { CreateAccountDto } from '../dto/create-account.dto';
import { Account } from '../account.model';

export type SignUpInboundPortInputDto = CreateAccountDto;
export type SignUpInboundPortOutputDto = Account;

export const SIGN_UP_INBOUND_PORT = 'SIGN_UP_INBOUND_PORT' as const;

export interface SignUpInboundPort {
  execute(
    params: SignUpInboundPortInputDto,
  ): Promise<SignUpInboundPortOutputDto>;
}