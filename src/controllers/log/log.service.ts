import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PipelineStage, Model } from 'mongoose';
import { ILogModel } from 'src/interfaces/models/log.model.interface';
import { ILogService } from 'src/interfaces/services/log.service.interface';
import { IMongoType } from 'src/middlewares/utils/mongo.util';

@Injectable()
export class LogService implements ILogService {
    constructor(@InjectModel("Logs") private model: Model<ILogModel>) { }

    findAll(dynamicParameters?: PipelineStage[]): Promise<ILogModel[]> {
        return this.model.aggregate(dynamicParameters).exec();
    }
    findById(id: String): Promise<ILogModel> {
        return this.model.findById(id).exec();
    }
    create(obj: ILogModel): Promise<ILogModel> {
        const result = new this.model(obj);
        return result.save();
    }
    update(obj: ILogModel): Promise<IMongoType> {
        return this.model.updateOne({ _id: obj._id }, obj).exec();
    }
    delete(id: String): Promise<IMongoType> {
        return this.model.deleteOne({ _id: id }).exec();
    }
}
