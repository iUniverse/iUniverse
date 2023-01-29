import { Module } from '@nestjs/common';
import { GetMembersController } from './controller/sign-up.controller';
import { SIGN_UP_INBOUND_PORT } from './inbound-port/sign-up.inbound-port';
import { SignUpService } from './service/sing-up.service';
import { CREATE_ACCOUNT_OUTBOUND_PORT } from './outbound-port/insert-account.outbound-port';
import { CreateAccountRepository } from './outbound-adepter/insert-account.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountRepository } from './account.repository';

// 오늘 할 것: member 의 리스트를 조회하는 API 작성
@Module({
  imports : [
    TypeOrmModule.forFeature([AccountRepository])
  ],
  controllers: [GetMembersController],
  providers: [
    // inbound-port
    {
      provide: SIGN_UP_INBOUND_PORT,
      useClass: SignUpService,
    },

    // outbound-port
    {
      provide: CREATE_ACCOUNT_OUTBOUND_PORT,
      useClass: CreateAccountRepository,
    },
    AccountRepository
  ],
})
export class SigmUpModule {}