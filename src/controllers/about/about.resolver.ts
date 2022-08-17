import { Resolver } from '@nestjs/graphql';
import { IAboutModel } from 'src/interfaces/models/about.model.interface';
import { IAboutResolver } from 'src/interfaces/resolvers/about.resolver.interface';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';
import { IMongoType } from 'src/middlewares/utils/mongo.util';
import { AboutService } from './about.service';

@Resolver()
export class AboutResolver implements IAboutResolver {
    constructor(private service: AboutService, private proxy: MalcolmXService<IAboutModel>) {
        this.proxy = new MalcolmXService<IAboutModel>(this.service);
    }

    abouts(): Promise<IAboutModel[]> {
        return this.proxy.findAll();
    }
    aboutById(id: String): Promise<IAboutModel> {
        return this.proxy.findById(id);
    }
    aboutCreate(input: IAboutModel): Promise<IAboutModel> {
        return this.proxy.create(input);
    }
    aboutUpdate(input: IAboutModel): Promise<IMongoType> {
        return this.proxy.update(input);
    }
    aboutDelete(id: String): Promise<IMongoType> {
        return this.proxy.delete(id);
    }
}
