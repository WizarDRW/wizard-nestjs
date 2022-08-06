import { Module } from '@nestjs/common';
import { ChapterService } from './chapter.service';
import { ChapterResolver } from './chapter.resolver';
import { ChapterSchema } from 'src/schemas/chapter.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';

@Module({
  imports: [MongooseModule.forFeature([{ name: "Chapters", schema: ChapterSchema }])],
  providers: [ChapterService, ChapterResolver, MalcolmXService]
})
export class ChapterModule { }
