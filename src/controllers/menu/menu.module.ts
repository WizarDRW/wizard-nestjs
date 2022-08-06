import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MenuSchema } from 'src/schemas/menu.schema';
import { MenuService } from './menu.service';
import { MenuResolver } from './menu.resolver';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';

@Module({
    imports: [MongooseModule.forFeature([{ name: "Menus", schema: MenuSchema }])],
    providers: [MenuService, MenuResolver, MalcolmXService],
})
export class MenuModule {}
