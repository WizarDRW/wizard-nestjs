import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LogSchema } from 'src/schemas/log.schema';
import { LogService } from './log.service';
import { LogResolver } from './log.resolver';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';

@Module({
    imports: [MongooseModule.forFeature([{ name: "Logs", schema: LogSchema }])],
    providers: [LogService, LogResolver, MalcolmXService],
})
export class LogModule {}
