import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { BoardsModule } from './boards/boards.module';
import { SigmUpModule } from './signUp/signUp.module';
import { BoardsService } from './boards/boards.service';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), BoardsModule, SigmUpModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
