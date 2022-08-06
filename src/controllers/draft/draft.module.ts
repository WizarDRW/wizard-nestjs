import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DraftSchema } from 'src/schemas/draft.schema';
import { DraftService } from './draft.service';
import { DraftResolver } from './draft.resolver';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';

@Module({
    imports: [MongooseModule.forFeature([{ name: "Drafts", schema: DraftSchema }])],
    providers: [DraftService, DraftResolver, MalcolmXService],
})
export class DraftModule {}
