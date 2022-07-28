import { Module } from '@nestjs/common';
import { NewsResolver } from './news.resolver';

@Module({
  providers: [NewsResolver]
})
export class NewsModule {}
