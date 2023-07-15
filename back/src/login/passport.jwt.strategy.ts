import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';
import { LoginService } from './login.service';
import { PayloadDto } from './dto/payload.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private loginService: LoginService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: 'SECRET_KEY',
    });
  }

  async validate(payload: PayloadDto, done: VerifiedCallback): Promise<any> {
    const account = await this.loginService.tokenValidateUser(payload);
    if (!account) {
      return done(
        new UnauthorizedException({ message: '존재하지 않는 사용자입니다.' }),
        null,
      );
    }
    return done(null, account);
  }
}
