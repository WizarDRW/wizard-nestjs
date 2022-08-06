import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ForumSchema } from 'src/schemas/forum.schema';
import { ForumService } from './forum.service';
import { ForumResolver } from './forum.resolver';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';

@Module({
    imports: [MongooseModule.forFeature([{ name: "Forums", schema: ForumSchema }])],
    providers: [ForumService, ForumResolver, MalcolmXService],
})
export class ForumModule {}
