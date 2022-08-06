import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schemas/user.schema';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';

@Module({
    imports: [MongooseModule.forFeature([{ name: "Users", schema: UserSchema }])],
    providers: [UserService, UserResolver, MalcolmXService],
})
export class UserModule { }
