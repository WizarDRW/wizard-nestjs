import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PipelineStage, Model } from 'mongoose';
import { ICategoryModel } from 'src/interfaces/models/category.model.interface';
import { ICategoryService } from 'src/interfaces/services/category.service.interface';
import { IMongoType } from 'src/middlewares/utils/mongo.util';

@Injectable()
export class CategoryService implements ICategoryService {
    constructor(@InjectModel("Categories") private model: Model<ICategoryModel>) { }

    findAll(dynamicParameters?: PipelineStage[]): Promise<ICategoryModel[]> {
        return this.model.aggregate(dynamicParameters).exec();
    }
    findById(id: String): Promise<ICategoryModel> {
        return this.model.findById(id).exec();
    }
    create(obj: ICategoryModel): Promise<ICategoryModel> {
        const result = new this.model(obj);
        return result.save();
    }
    update(obj: ICategoryModel): Promise<IMongoType> {
        return this.model.updateOne({ _id: obj._id }, obj).exec();
    }
    delete(id: String): Promise<IMongoType> {
        return this.model.deleteOne({ _id: id }).exec();
    }
}
