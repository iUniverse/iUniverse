import { IsString } from 'class-validator';

export class UpdateTokenDto {
  @IsString()
  access: string;
  refresh: string;
}
