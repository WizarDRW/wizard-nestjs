import { Resolver } from '@nestjs/graphql';
import { ILibraryModel } from 'src/interfaces/models/library.model.interface';
import { ILibraryResolver } from 'src/interfaces/resolvers/library.resolver.interface';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';
import { IMongoType } from 'src/middlewares/utils/mongo.util';
import { LibraryService } from './library.service';

@Resolver()
export class LibraryResolver implements ILibraryResolver {
    constructor(private service: LibraryService, private proxy: MalcolmXService<ILibraryModel>) {
        this.proxy = new MalcolmXService<ILibraryModel>(this.service);
    }

    libraries(): Promise<ILibraryModel[]> {
        return this.proxy.findAll();
    }
    libraryById(id: String): Promise<ILibraryModel> {
        return this.proxy.findById(id);
    }
    libraryCreate(input: ILibraryModel): Promise<ILibraryModel> {
        return this.proxy.create(input);
    }
    libraryUpdate(input: ILibraryModel): Promise<IMongoType> {
        return this.proxy.update(input);
    }
    libraryDelete(id: String): Promise<IMongoType> {
        return this.proxy.delete(id);
    }
}
