import { Resolver } from '@nestjs/graphql';
import { IChapterModel } from 'src/interfaces/models/chapter.model.interface';
import { IChapterResolver } from 'src/interfaces/resolvers/chapter.resolver.interface';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';
import { IMongoType } from 'src/middlewares/utils/mongo.util';
import { ChapterService } from './chapter.service';

@Resolver()
export class ChapterResolver implements IChapterResolver {
    constructor(private service: ChapterService, private proxy: MalcolmXService<IChapterModel>) {
        this.proxy = new MalcolmXService<IChapterModel>(this.service);
    }

    chapters(): Promise<IChapterModel[]> {
        return this.proxy.findAll();
    }
    chapterById(id: String): Promise<IChapterModel> {
        return this.proxy.findById(id);
    }
    chapterCreate(input: IChapterModel): Promise<IChapterModel> {
        return this.proxy.create(input);
    }
    chapterUpdate(input: IChapterModel): Promise<IMongoType> {
        return this.proxy.update(input);
    }
    chapterDelete(id: String): Promise<IMongoType> {
        return this.proxy.delete(id);
    }
}
