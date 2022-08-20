import { Resolver } from '@nestjs/graphql';
import { IForumModel } from 'src/interfaces/models/forum.model.interface';
import { IForumResolver } from 'src/interfaces/resolvers/forum.resolver.interface';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';
import { IMongoType } from 'src/middlewares/utils/mongo.util';
import { ForumService } from './forum.service';

@Resolver()
export class ForumResolver implements IForumResolver {
    constructor(private service: ForumService, private proxy: MalcolmXService<IForumModel>) {
        this.proxy = new MalcolmXService<IForumModel>(this.service);
    }

    forums(): Promise<IForumModel[]> {
        return this.proxy.findAll();
    }
    forumById(id: String): Promise<IForumModel> {
        return this.proxy.findById(id);
    }
    forumCreate(input: IForumModel): Promise<IForumModel> {
        return this.proxy.create(input);
    }
    forumUpdate(input: IForumModel): Promise<IMongoType> {
        return this.proxy.update(input);
    }
    forumDelete(id: String): Promise<IMongoType> {
        return this.proxy.delete(id);
    }
}
