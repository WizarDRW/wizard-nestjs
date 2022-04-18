import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChapterController } from './controller/chapter/chapter.controller';
import { ChapterModule } from './controller/chapter/chapter.module';
import { NewsService } from './controller/news/news.service';
import { NewsController } from './controller/news/news.controller';
import { NewsModule } from './controller/news/news.module';
import { ChapterService } from './controller/chapter/chapter.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [AppModule, ChapterModule, NewsModule, MongooseModule.forRoot("")],
  controllers: [AppController, ChapterController, NewsController],
  providers: [AppService, ChapterService ,NewsService],
})
export class AppModule {}
