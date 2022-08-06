import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from 'src/schemas/category.schema';
import { CategoryService } from './category.service';
import { CategoryResolver } from './category.resolver';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';

@Module({
    imports: [MongooseModule.forFeature([{ name: "Categories", schema: CategorySchema }])],
    providers: [CategoryService, CategoryResolver, MalcolmXService],
})
export class CategoryModule {}
