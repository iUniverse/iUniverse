import { FindOneOptions, Repository } from 'typeorm';
import { Token } from './token.entity';
import { UpdateTokenDto } from './dto/updateToken.dto';
import { RemoveTokenDto } from './dto/removeToken.dto';
import { CustomRepository } from '../typeorm-ex.decorator';

@CustomRepository(Token)
export class TokenRepository extends Repository<Token> {
  async isUser(account: string): Promise<Token | undefined> {
    const isData = await this.findOne({
      where: { account: account },
    });
    if (!isData) {
      //table 없으면 생성?? 회원가입쪽에서 처리했다고 믿고 가나?
    }
    return isData;
  }

  async findToken(options: FindOneOptions): Promise<Token | undefined> {
    return await this.findOne(options);
  }
  async saveToken(account: string, token: UpdateTokenDto) {
    return await this.update({ account }, token);
  }

  async removeToken(token: RemoveTokenDto) {
    return await this.update(token.account, token);
  }
}
