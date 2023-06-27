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
import { BasetypeModule } from './basetype/basetype.module';
import { SubtypeModule } from './subtype/subtype.module';
import { BoardModule } from './board/board.module';
import { BoardTaskMapModule } from './board-task-map/board-task-map.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig), 
    ProjectModule, 
    TaskModule, 
    IuniCatModule,
    ThemeModule,
    ProjectThemeModule,
    BasetypeModule,
    SubtypeModule,
    BoardModule,
    BoardTaskMapModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
