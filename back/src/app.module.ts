import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { BoardsModule } from './boards/boards.module';
import { SignUpModule } from './signUp/signUp.module';
import { ValidateAccountModule } from './validateAccount/validateAccount.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), BoardsModule, SignUpModule,ValidateAccountModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}