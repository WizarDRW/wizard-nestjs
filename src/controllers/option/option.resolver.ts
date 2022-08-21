import { Resolver } from '@nestjs/graphql';
import { IOptionModel } from 'src/interfaces/models/option.model.interface';
import { IOptionResolver } from 'src/interfaces/resolvers/option.resolver.interface';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';
import { IMongoType } from 'src/middlewares/utils/mongo.util';
import { OptionService } from './option.service';

@Resolver()
export class OptionResolver implements IOptionResolver {
    constructor(private service: OptionService, private proxy: MalcolmXService<IOptionModel>) {
        this.proxy = new MalcolmXService<IOptionModel>(this.service);
    }

    options(): Promise<IOptionModel[]> {
        return this.proxy.findAll();
    }
    optionById(id: String): Promise<IOptionModel> {
        return this.proxy.findById(id);
    }
    optionCreate(input: IOptionModel): Promise<IOptionModel> {
        return this.proxy.create(input);
    }
    optionUpdate(input: IOptionModel): Promise<IMongoType> {
        return this.proxy.update(input);
    }
    optionDelete(id: String): Promise<IMongoType> {
        return this.proxy.delete(id);
    }
}
