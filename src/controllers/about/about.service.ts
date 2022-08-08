import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PipelineStage, Model } from 'mongoose';
import { IAboutModel } from 'src/interfaces/models/about.model.interface';
import { IAboutService } from 'src/interfaces/services/about.service.interface';
import { IMongoType } from 'src/middlewares/utils/mongo.util';

@Injectable()
export class AboutService implements IAboutService {
    constructor(@InjectModel("Abouts") private model: Model<IAboutModel>) { }

    findAll(dynamicParameters?: PipelineStage[]): Promise<IAboutModel[]> {
        return this.model.aggregate(dynamicParameters).exec();
    }
    findById(id: String): Promise<IAboutModel> {
        return this.model.findById(id).exec();
    }
    create(obj: IAboutModel): Promise<IAboutModel> {
        const result = new this.model(obj);
        return result.save();
    }
    update(obj: IAboutModel): Promise<IMongoType> {
        return this.model.updateOne({ _id: obj._id }, obj).exec();
    }
    delete(id: String): Promise<IMongoType> {
        return this.model.deleteOne({ _id: id }).exec();
    }
}
