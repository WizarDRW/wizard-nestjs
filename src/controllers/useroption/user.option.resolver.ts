import { Resolver } from '@nestjs/graphql';
import { IUserOptionModel } from 'src/interfaces/models/user.option.model.interface';
import { IUserOptionResolver } from 'src/interfaces/resolvers/user.option.resolver.interface';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';
import { IMongoType } from 'src/middlewares/utils/mongo.util';
import { UserOptionService } from './user.option.service';

@Resolver()
export class UserOptionResolver implements IUserOptionResolver {
    constructor(private service: UserOptionService, private proxy: MalcolmXService<IUserOptionModel>) {
        this.proxy = new MalcolmXService<IUserOptionModel>(this.service);
    }

    userOptions(): Promise<IUserOptionModel[]> {
        return this.proxy.findAll();
    }
    userOptionById(id: String): Promise<IUserOptionModel> {
        return this.proxy.findById(id);
    }
    userOptionCreate(input: IUserOptionModel): Promise<IUserOptionModel> {
        return this.proxy.create(input);
    }
    userOptionUpdate(input: IUserOptionModel): Promise<IMongoType> {
        return this.proxy.update(input);
    }
    userOptionDelete(id: String): Promise<IMongoType> {
        return this.proxy.delete(id);
    }
}
