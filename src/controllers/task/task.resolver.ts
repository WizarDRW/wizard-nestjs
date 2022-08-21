import { Resolver } from '@nestjs/graphql';
import { ITaskModel } from 'src/interfaces/models/task.model.interface';
import { ITaskResolver } from 'src/interfaces/resolvers/task.resolver.interface';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';
import { IMongoType } from 'src/middlewares/utils/mongo.util';
import { TaskService } from './task.service';

@Resolver()
export class TaskResolver implements ITaskResolver {
    constructor(private service: TaskService, private proxy: MalcolmXService<ITaskModel>) {
        this.proxy = new MalcolmXService<ITaskModel>(this.service);
    }

    tasks(): Promise<ITaskModel[]> {
        return this.proxy.findAll();
    }
    taskById(id: String): Promise<ITaskModel> {
        return this.proxy.findById(id);
    }
    taskCreate(input: ITaskModel): Promise<ITaskModel> {
        return this.proxy.create(input);
    }
    taskUpdate(input: ITaskModel): Promise<IMongoType> {
        return this.proxy.update(input);
    }
    taskDelete(id: String): Promise<IMongoType> {
        return this.proxy.delete(id);
    }
}
