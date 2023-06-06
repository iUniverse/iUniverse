import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { ProjectModule } from './project/project.module';
import { TaskModule } from './task/task.module';
import { ThemeModule } from './theme/theme.module';
import { IuniCatModule } from './iunicat/iunicat.module';
import { ProjectThemeModule } from './project-theme-map/project-theme.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig), 
    ProjectModule, 
    TaskModule, 
    IuniCatModule,
    ThemeModule,
    ProjectThemeModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
