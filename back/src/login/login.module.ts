import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { TypeOrmExModule } from '../typeorm-ex.module';
import { AccountRepository } from './account.repository';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './passport.jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { TokenRepository } from './token.repository';

@Module({
  imports: [
    TypeOrmExModule.forCustomRepository([AccountRepository, TokenRepository]),
    JwtModule.register({
      secret: 'SECRET_KEY',
      signOptions: { expiresIn: '300s' },
    }),
    PassportModule,
  ],
  controllers: [LoginController],
  providers: [LoginService, JwtStrategy],
})
export class LoginModule {}
