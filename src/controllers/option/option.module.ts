import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OptionSchema } from 'src/schemas/option.schema';
import { OptionService } from './option.service';
import { OptionResolver } from './option.resolver';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';

@Module({
    imports: [MongooseModule.forFeature([{ name: "Options", schema: OptionSchema }])],
    providers: [OptionService, OptionResolver, MalcolmXService],
})
export class OptionModule {}
