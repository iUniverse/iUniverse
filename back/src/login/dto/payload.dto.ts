import { IsString } from 'class-validator';

export class PayloadDto {
  @IsString()
  index: number;
  account: string;
}
