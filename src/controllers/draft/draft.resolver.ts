import { Resolver } from '@nestjs/graphql';
import { IDraftModel } from 'src/interfaces/models/draft.model.interface';
import { IDraftResolver } from 'src/interfaces/resolvers/draft.resolver.interface';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';
import { IMongoType } from 'src/middlewares/utils/mongo.util';
import { DraftService } from './draft.service';

@Resolver()
export class DraftResolver implements IDraftResolver {
    constructor(private service: DraftService, private proxy: MalcolmXService<IDraftModel>) {
        this.proxy = new MalcolmXService<IDraftModel>(this.service);
    }

    drafts(): Promise<IDraftModel[]> {
        return this.proxy.findAll();
    }
    draftById(id: String): Promise<IDraftModel> {
        return this.proxy.findById(id);
    }
    draftCreate(input: IDraftModel): Promise<IDraftModel> {
        return this.proxy.create(input);
    }
    draftUpdate(input: IDraftModel): Promise<IMongoType> {
        return this.proxy.update(input);
    }
    draftDelete(id: String): Promise<IMongoType> {
        return this.proxy.delete(id);
    }
}
