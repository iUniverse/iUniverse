import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { LoginService } from './login.service';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './auth.guard';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post('/authorize')
  async login(
    @Body() authCredentialsDto: LoginDto,
    @Res() res: Response,
  ): Promise<any> {
    const jwt = await this.loginService.validateUser(authCredentialsDto);
    res.setHeader('Authorization', 'Bearer ' + jwt.access);
    res.setHeader('refreshToken', jwt.refresh); //refresh db index 값을 주는 방식도 있음
    return res.json(jwt);
  }

  //test
  @Get('/test')
  @UseGuards(AuthGuard)
  isAuthenticated(@Req() req: Request): any {
    const account: any = req.user;
    return account;
  }
}
