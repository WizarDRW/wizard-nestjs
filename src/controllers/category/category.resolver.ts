import { Resolver } from '@nestjs/graphql';
import { ICategoryModel } from 'src/interfaces/models/category.model.interface';
import { ICategoryResolver } from 'src/interfaces/resolvers/category.resolver.interface';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';
import { IMongoType } from 'src/middlewares/utils/mongo.util';
import { CategoryService } from './category.service';

@Resolver()
export class CategoryResolver implements ICategoryResolver {
    constructor(private service: CategoryService, private proxy: MalcolmXService<ICategoryModel>) {
        this.proxy = new MalcolmXService<ICategoryModel>(this.service);
    }

    categories(): Promise<ICategoryModel[]> {
        return this.proxy.findAll()
    }
    categoryById(id: String): Promise<ICategoryModel> {
        return this.proxy.findById(id);
    }
    categoryCreate(input: ICategoryModel): Promise<ICategoryModel> {
        return this.proxy.create(input);
    }
    categoryUpdate(input: ICategoryModel): Promise<IMongoType> {
        return this.proxy.update(input);
    }
    categoryDelete(id: String): Promise<IMongoType> {
        return this.proxy.delete(id);
    }
}
