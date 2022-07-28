import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChapterModule } from './controllers/chapter/chapter.module';
import { NewsService } from './controllers/news/news.service';
import { NewsModule } from './controllers/news/news.module';
import { ChapterService } from './controllers/chapter/chapter.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [AppModule, ChapterModule, NewsModule, MongooseModule.forRoot("")],
  controllers: [AppController],
  providers: [AppService, ChapterService ,NewsService],
})
export class AppModule {}
