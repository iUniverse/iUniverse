import { Module } from '@nestjs/common';
import { TypeOrmExModule } from 'src/typeorm-ex.module';
import { ValidateAccountController } from './controller/validate-account.controller';
import { VALIDATE_ACCOUNT_INBOUND_PORT } from './inbound-port/validate-account.inbound';
import { ValidateAccountService } from './service/validate-account.service';
import { VALIDATE_ACCOUNT_OUTBOUND_PORT } from './outbound-port/validate-account.outbound-port';
import { AuthAccountRepository } from './outbound-adepter/validate-account.repository';
import { AccountRepository } from './account.repository';

// 오늘 할 것: member 의 리스트를 조회하는 API 작성
@Module({
  imports : [
    TypeOrmExModule.forCustomRepository([AccountRepository])
  ],
  controllers: [ValidateAccountController],
  providers: [
    // inbound-port
    {
      provide: VALIDATE_ACCOUNT_INBOUND_PORT,
      useClass: ValidateAccountService,
    },
    // outbound-port
    {
      provide: VALIDATE_ACCOUNT_OUTBOUND_PORT,
      useClass: AuthAccountRepository,
    }
  ],
})
export class ValidateAccountModule {}