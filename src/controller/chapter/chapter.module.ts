import { Module } from '@nestjs/common';
import { ChapterService } from './chapter.service';

@Module({
  providers: [ChapterService]
})
export class ChapterModule {}
