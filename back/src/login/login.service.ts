import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountRepository } from './account.repository';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { Account } from './account.entity';
import { Token } from './token.entity';
import { TokenRepository } from './token.repository';
import { PayloadDto } from './dto/payload.dto';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(AccountRepository)
    private accountRepository: AccountRepository,
    private tokenRepository: TokenRepository,
    private jwtService: JwtService,
  ) {}

  async validateUser(loginDto: LoginDto): Promise<{
    access: string;
    refresh: string;
  }> {
    const userFind: Account = await this.accountRepository.findAccount({
      where: { account: loginDto.account },
    });
    console.log(userFind);
    const payload: PayloadDto = {
      index: userFind.index,
      account: userFind.account,
    };
    const accessToken = this.jwtService.sign(payload);
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });
    const token = {
      access: accessToken,
      refresh: refreshToken,
    };
    const updateResult = await this.tokenRepository.saveToken(
      loginDto.account,
      token,
    );
    if (!updateResult) {
    }
    return token;
  }

  async tokenValidateUser(payload: PayloadDto): Promise<Token | undefined> {
    return await this.tokenRepository.findToken({
      where: { index: payload.index },
    });
  }
}
