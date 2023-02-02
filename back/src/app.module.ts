import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), ProjectModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
