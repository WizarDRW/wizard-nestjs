import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';
import { NewsSchema } from 'src/schemas/news.schema';
import { NewsResolver } from './news.resolver';
import { NewsService } from './news.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: "News", schema: NewsSchema }])],
  providers: [NewsResolver, NewsService, MalcolmXService]
})
export class NewsModule {}
