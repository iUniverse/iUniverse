import { IsString } from 'class-validator';

export class RemoveTokenDto {
  @IsString()
  account: string;
  accessToken: null;
  refreshToken: null;
}
