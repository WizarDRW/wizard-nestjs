import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChapterController } from './controllers/chapter/chapter.controller';
import { ChapterModule } from './controllers/chapter/chapter.module';
import { NewsService } from './controllers/news/news.service';
import { NewsController } from './controllers/news/news.controller';
import { NewsModule } from './controllers/news/news.module';
import { ChapterService } from './controllers/chapter/chapter.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [AppModule, ChapterModule, NewsModule, MongooseModule.forRoot("")],
  controllers: [AppController, ChapterController, NewsController],
  providers: [AppService, ChapterService ,NewsService],
})
export class AppModule {}
