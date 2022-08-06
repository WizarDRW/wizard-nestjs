import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ThemeSchema } from 'src/schemas/theme.schema';
import { ThemeService } from './theme.service';
import { ThemeResolver } from './theme.resolver';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';

@Module({
    imports: [MongooseModule.forFeature([{ name: "Themes", schema: ThemeSchema }])],
    providers: [ThemeService, ThemeResolver, MalcolmXService],
})
export class ThemeModule {}
