import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChapterModule } from './controllers/chapter/chapter.module';
import { NewsModule } from './controllers/news/news.module';
import { ChapterService } from './controllers/chapter/chapter.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AboutModule } from './controllers/about/about.module';
import { CategoryModule } from './controllers/category/category.module';
import { DraftModule } from './controllers/draft/draft.module';
import { ForumModule } from './controllers/forum/forum.module';
import { LibraryModule } from './controllers/library/library.module';
import { LogModule } from './controllers/log/log.module';
import { MenuModule } from './controllers/menu/menu.module';
import { MessageModule } from './controllers/message/message.module';
import { OptionModule } from './controllers/option/option.module';
import { TaskModule } from './controllers/task/task.module';
import { ThemeModule } from './controllers/theme/theme.module';
import { UserModule } from './controllers/user/user.module';
import { UserOptionModule } from './controllers/useroption/user.option.module';

@Module({
  imports: [AppModule, ChapterModule, NewsModule, MongooseModule.forRoot(""), AboutModule, CategoryModule, DraftModule, ForumModule, LibraryModule, LogModule, MenuModule, MessageModule, OptionModule, TaskModule, ThemeModule, UserModule, UserOptionModule],
  controllers: [AppController],
  providers: [AppService, ChapterService],
})
export class AppModule {}
