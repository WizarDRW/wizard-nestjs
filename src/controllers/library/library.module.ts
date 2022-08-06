import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LibrarySchema } from 'src/schemas/library.schema';
import { LibraryService } from './library.service';
import { LibraryResolver } from './library.resolver';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';

@Module({
    imports: [MongooseModule.forFeature([{ name: "Libraries", schema: LibrarySchema }])],
    providers: [LibraryService, LibraryResolver, MalcolmXService],
})
export class LibraryModule {}
