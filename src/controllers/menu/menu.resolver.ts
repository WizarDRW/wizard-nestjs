import { Resolver } from '@nestjs/graphql';
import { IMenuModel } from 'src/interfaces/models/menu.model.interface';
import { IMenuResolver } from 'src/interfaces/resolvers/menu.resolver.interface';
import { IMenuService } from 'src/interfaces/services/menu.service.interface';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';
import { IMongoType } from 'src/middlewares/utils/mongo.util';
import { MenuService } from './menu.service';

@Resolver()
export class MenuResolver implements IMenuResolver {
    constructor(private service: MenuService, private proxy: MalcolmXService<IMenuModel>) {
        this.proxy = new MalcolmXService<IMenuModel>(this.service);
    }

    menus(): Promise<IMenuModel[]> {
        return this.proxy.findAll();
    }
    menuById(id: String): Promise<IMenuModel> {
        return this.proxy.findById(id);
    }
    menuCreate(input: IMenuModel): Promise<IMenuModel> {
        return this.proxy.create(input);
    }
    menuUpdate(input: IMenuModel): Promise<IMongoType> {
        return this.proxy.update(input);
    }
    menuDelete(id: String): Promise<IMongoType> {
        return this.proxy.delete(id);
    }
}
