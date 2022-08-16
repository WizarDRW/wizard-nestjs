import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, PipelineStage } from 'mongoose';
import { ITaskModel } from 'src/interfaces/models/task.model.interface';
import { ITaskService } from 'src/interfaces/services/task.service.interface';
import { IMongoType } from 'src/middlewares/utils/mongo.util';

@Injectable()
export class TaskService implements ITaskService {
    constructor(@InjectModel("Tasks") private model: Model<ITaskModel>) { }

    findAll(dynamicParameters?: PipelineStage[]): Promise<ITaskModel[]> {
        return this.model.aggregate(dynamicParameters).exec();
    }
    findById(id: String): Promise<ITaskModel> {
        return this.model.findById(id).exec();
    }
    create(obj: ITaskModel): Promise<ITaskModel> {
        const result = new this.model(obj);
        return result.save();
    }
    update(obj: ITaskModel): Promise<IMongoType> {
        return this.model.updateOne({ _id: obj._id }, obj).exec();
    }
    delete(id: String): Promise<IMongoType> {
        return this.model.deleteOne({ _id: id }).exec();
    }
}
