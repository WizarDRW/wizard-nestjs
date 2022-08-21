import { Resolver } from '@nestjs/graphql';
import { INewsModel } from 'src/interfaces/models/news.model.interface';
import { INewsResolver } from 'src/interfaces/resolvers/news.resolver.interface';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';
import { IMongoType } from 'src/middlewares/utils/mongo.util';
import { NewsService } from './news.service';

@Resolver()
export class NewsResolver implements INewsResolver {
    constructor(private service: NewsService, private proxy: MalcolmXService<INewsModel>) {
        this.proxy = new MalcolmXService<INewsModel>(this.service);
    }

    news(): Promise<INewsModel[]> {
        throw new Error('Method not implemented.');
    }
    newsById(id: String): Promise<INewsModel> {
        throw new Error('Method not implemented.');
    }
    newsCreate(input: INewsModel): Promise<INewsModel> {
        throw new Error('Method not implemented.');
    }
    newsUpdate(input: INewsModel): Promise<IMongoType> {
        throw new Error('Method not implemented.');
    }
    newsDelete(id: String): Promise<IMongoType> {
        throw new Error('Method not implemented.');
    }
}
