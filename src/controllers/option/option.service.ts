import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, PipelineStage } from 'mongoose';
import { IOptionModel } from 'src/interfaces/models/option.model.interface';
import { IOptionService } from 'src/interfaces/services/option.service.interface';
import { IMongoType } from 'src/middlewares/utils/mongo.util';

@Injectable()
export class OptionService implements IOptionService {
    constructor(@InjectModel("Options") private model: Model<IOptionModel>) { }

    findAll(dynamicParameters?: PipelineStage[]): Promise<IOptionModel[]> {
        return this.model.aggregate(dynamicParameters).exec();
    }
    findById(id: String): Promise<IOptionModel> {
        return this.model.findById(id).exec();
    }
    create(obj: IOptionModel): Promise<IOptionModel> {
        const result = new this.model(obj);
        return result.save();
    }
    update(obj: IOptionModel): Promise<IMongoType> {
        return this.model.updateOne({ _id: obj._id }, obj).exec();
    }
    delete(id: String): Promise<IMongoType> {
        return this.model.deleteOne({ _id: id }).exec();
    }
}
