import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AboutSchema } from 'src/schemas/about.schema';
import { AboutService } from './about.service';
import { AboutResolver } from './about.resolver';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';

@Module({
    imports: [MongooseModule.forFeature([{ name: "Abouts", schema: AboutSchema }])],
    providers: [AboutService, AboutResolver, MalcolmXService],
})
export class AboutModule {}
