import { Resolver } from '@nestjs/graphql';
import { IMessageModel } from 'src/interfaces/models/message.model.interface';
import { IMessageResolver } from 'src/interfaces/resolvers/message.resolver.interface';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';
import { IMongoType } from 'src/middlewares/utils/mongo.util';
import { MessageService } from './message.service';

@Resolver()
export class MessageResolver implements IMessageResolver {
    constructor(private service: MessageService, private proxy: MalcolmXService<IMessageModel>) {
        this.proxy = new MalcolmXService<IMessageModel>(this.service);
    }

    messages(): Promise<IMessageModel[]> {
        return this.proxy.findAll();
    }
    messageById(id: String): Promise<IMessageModel> {
        return this.proxy.findById(id);
    }
    messageCreate(input: IMessageModel): Promise<IMessageModel> {
        return this.proxy.create(input);
    }
    messageUpdate(input: IMessageModel): Promise<IMongoType> {
        return this.proxy.update(input);
    }
    messageDelete(id: String): Promise<IMongoType> {
        return this.proxy.delete(id);
    }
}
