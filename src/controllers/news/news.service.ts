import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, PipelineStage } from 'mongoose';
import { INewsModel } from 'src/interfaces/models/news.model.interface';
import { INewsService } from 'src/interfaces/services/news.service.interface';
import { IMongoType } from 'src/middlewares/utils/mongo.util';

@Injectable()
export class NewsService implements INewsService {
    constructor(@InjectModel("News") private model: Model<INewsModel>) { }

    findAll(dynamicParameters?: PipelineStage[]): Promise<INewsModel[]> {
        return this.model.aggregate(dynamicParameters).exec();
    }
    findById(id: String): Promise<INewsModel> {
        return this.model.findById(id).exec();
    }
    create(obj: INewsModel): Promise<INewsModel> {
        const result = new this.model(obj);
        return result.save();
    }
    update(obj: INewsModel): Promise<IMongoType> {
        return this.model.updateOne({ _id: obj._id }, obj).exec();
    }
    delete(id: String): Promise<IMongoType> {
        return this.model.deleteOne({ _id: id }).exec();
    }
}
