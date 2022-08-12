import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, PipelineStage } from 'mongoose';
import { IMessageModel } from 'src/interfaces/models/message.model.interface';
import { IMessageService } from 'src/interfaces/services/message.service.interface';
import { IMongoType } from 'src/middlewares/utils/mongo.util';

@Injectable()
export class MessageService implements IMessageService {
    constructor(@InjectModel("Menus") private model: Model<IMessageModel>) { }

    findAll(dynamicParameters?: PipelineStage[]): Promise<IMessageModel[]> {
        return this.model.aggregate(dynamicParameters).exec();
    }
    findById(id: String): Promise<IMessageModel> {
        return this.model.findById(id).exec();
    }
    create(obj: IMessageModel): Promise<IMessageModel> {
        const result = new this.model(obj);
        return result.save();
    }
    update(obj: IMessageModel): Promise<IMongoType> {
        return this.model.updateOne({ _id: obj._id }, obj).exec();
    }
    delete(id: String): Promise<IMongoType> {
        return this.model.deleteOne({ _id: id }).exec();
    }
}
