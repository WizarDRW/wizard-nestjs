import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserOptionSchema } from 'src/schemas/useroption.schema';
import { UseroptionService } from './user.option.service';
import { UseroptionResolver } from './user.option.resolver';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';

@Module({
    imports: [MongooseModule.forFeature([{ name: "UserOptions", schema: UserOptionSchema }])],
    providers: [UseroptionService, UseroptionResolver, MalcolmXService],
})
export class UserOptionModule {}
