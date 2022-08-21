import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserOptionSchema } from 'src/schemas/useroption.schema';
import { UserOptionService } from './user.option.service';
import { UserOptionResolver } from './user.option.resolver';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';

@Module({
    imports: [MongooseModule.forFeature([{ name: "UserOptions", schema: UserOptionSchema }])],
    providers: [UserOptionService, UserOptionResolver, MalcolmXService],
})
export class UserOptionModule {}
