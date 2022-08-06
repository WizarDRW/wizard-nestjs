import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageSchema } from 'src/schemas/message.schema';
import { MessageService } from './message.service';
import { MessageResolver } from './message.resolver';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';

@Module({
    imports: [MongooseModule.forFeature([{ name: "Messages", schema: MessageSchema }])],
    providers: [MessageService, MessageResolver, MalcolmXService],
})
export class MessageModule {}
