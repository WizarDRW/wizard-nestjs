import { Resolver } from '@nestjs/graphql';
import { IThemeModel } from 'src/interfaces/models/theme.model.interface';
import { IThemeResolver } from 'src/interfaces/resolvers/theme.resolver.interface';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';
import { IMongoType } from 'src/middlewares/utils/mongo.util';
import { ThemeService } from './theme.service';

@Resolver()
export class ThemeResolver implements IThemeResolver {
    constructor(private service: ThemeService, private proxy: MalcolmXService<IThemeModel>) {
        this.proxy = new MalcolmXService<IThemeModel>(this.service);
    }

    themes(): Promise<IThemeModel[]> {
        return this.proxy.findAll();
    }
    themeById(id: String): Promise<IThemeModel> {
        return this.proxy.findById(id);
    }
    themeCreate(input: IThemeModel): Promise<IThemeModel> {
        return this.proxy.create(input);
    }
    themeUpdate(input: IThemeModel): Promise<IMongoType> {
        return this.proxy.update(input);
    }
    themeDelete(id: String): Promise<IMongoType> {
        return this.proxy.delete(id);
    }
}
