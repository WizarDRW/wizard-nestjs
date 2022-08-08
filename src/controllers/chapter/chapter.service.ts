import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PipelineStage, Model } from 'mongoose';
import { IChapterModel } from 'src/interfaces/models/chapter.model.interface';
import { IChapterService } from 'src/interfaces/services/chapter.service.interface';
import { IMongoType } from 'src/middlewares/utils/mongo.util';

@Injectable()
export class ChapterService implements IChapterService {
    constructor(@InjectModel("Chapters") private model: Model<IChapterModel>) { }
    
    findAll(dynamicParameters?: PipelineStage[]): Promise<IChapterModel[]> {
        return this.model.aggregate(dynamicParameters).exec();
    }
    findById(id: String): Promise<IChapterModel> {
        return this.model.findById(id).exec();
    }
    create(obj: IChapterModel): Promise<IChapterModel> {
        const result = new this.model(obj);
        return result.save();
    }
    update(obj: IChapterModel): Promise<IMongoType> {
        return this.model.updateOne({ _id: obj._id }, obj).exec();
    }
    delete(id: String): Promise<IMongoType> {
        return this.model.deleteOne({ _id: id }).exec();
    }
}
