import { Resolver } from '@nestjs/graphql';
import { IUserModel } from 'src/interfaces/models/user.model.interface';
import { IUserResolver } from 'src/interfaces/resolvers/user.resolver.interface';
import { IUserService } from 'src/interfaces/services/user.service.interface';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';
import { IMongoType } from 'src/middlewares/utils/mongo.util';
import { UserService } from './user.service';

@Resolver()
export class UserResolver implements IUserResolver {
    constructor(private service: UserService, private proxy: MalcolmXService<IUserModel>) {
        this.proxy = new MalcolmXService<IUserModel>(this.service);
    }

    users(): Promise<IUserModel[]> {
        return this.proxy.findAll();
    }
    userById(id: String): Promise<IUserModel> {
        return this.proxy.findById(id);
    }
    userCreate(input: IUserModel): Promise<IUserModel> {
        return this.proxy.create(input);
    }
    userUpdate(input: IUserModel): Promise<IMongoType> {
        return this.proxy.update(input);
    }
    userDelete(id: String): Promise<IMongoType> {
        return this.proxy.delete(id);
    }
}
