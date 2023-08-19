import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { IMenuModel } from 'src/interfaces/models/menu.model.interface';
import { IMenuResolver } from 'src/interfaces/resolvers/menu.resolver.interface';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';
import {
  DeleteResult,
  IMongoType,
  UpdateResult,
} from 'src/middlewares/utils/mongo.util';
import { MenuService } from './menu.service';
import { MenuType } from 'src/types/menu.type';
import { MenuCreateInput } from 'src/inputs/menu.input';

@Resolver('menu')
export class MenuResolver implements IMenuResolver {
  constructor(
    private service: MenuService,
    private proxy: MalcolmXService<IMenuModel>,
  ) {
    this.proxy = new MalcolmXService<IMenuModel>(this.service);
  }

  @Query(() => [MenuType])
  menus(): Promise<IMenuModel[]> {
    return this.proxy.findAll();
  }
  @Query(() => MenuType)
  menuById(id: String): Promise<IMenuModel> {
    return this.proxy.findById(id);
  }
  @Mutation((returns) => MenuType)
  menuCreate(@Args('input') input: MenuCreateInput): Promise<IMenuModel> {
    return this.proxy.create(input);
  }
  @Mutation((returns) => UpdateResult)
  menuUpdate(input: IMenuModel): Promise<IMongoType> {
    return this.proxy.update(input);
  }
  @Mutation((returns) => DeleteResult)
  menuDelete(id: String): Promise<IMongoType> {
    return this.proxy.delete(id);
  }
}
