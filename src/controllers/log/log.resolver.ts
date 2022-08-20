import { Resolver } from '@nestjs/graphql';
import { ILogModel } from 'src/interfaces/models/log.model.interface';
import { ILogResolver } from 'src/interfaces/resolvers/log.resolver.interface';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';
import { IMongoType } from 'src/middlewares/utils/mongo.util';
import { LogService } from './log.service';

@Resolver()
export class LogResolver implements ILogResolver {
    constructor(private service: LogService, private proxy: MalcolmXService<ILogModel>) {
        this.proxy = new MalcolmXService<ILogModel>(this.service);
    }

    logs(): Promise<ILogModel[]> {
        return this.proxy.findAll();
    }
    logById(id: String): Promise<ILogModel> {
        return this.proxy.findById(id);
    }
    logCreate(input: ILogModel): Promise<ILogModel> {
        return this.proxy.create(input);
    }
    logUpdate(input: ILogModel): Promise<IMongoType> {
        return this.proxy.update(input);
    }
    logDelete(id: String): Promise<IMongoType> {
        return this.proxy.delete(id);
    }
}
