import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, PipelineStage } from 'mongoose';
import { IUserOptionModel } from 'src/interfaces/models/user.option.model.interface';
import { IUserOptionService } from 'src/interfaces/services/user.option.service.interface';
import { IMongoType } from 'src/middlewares/utils/mongo.util';

@Injectable()
export class UserOptionService implements IUserOptionService {
    constructor(@InjectModel("UserOptions") private model: Model<IUserOptionModel>) { }

    findAll(dynamicParameters?: PipelineStage[]): Promise<IUserOptionModel[]> {
        return this.model.aggregate(dynamicParameters).exec();
    }
    findById(id: String): Promise<IUserOptionModel> {
        return this.model.findById(id).exec();
    }
    create(obj: IUserOptionModel): Promise<IUserOptionModel> {
        const result = new this.model(obj);
        return result.save();
    }
    update(obj: IUserOptionModel): Promise<IMongoType> {
        return this.model.updateOne({ _id: obj._id }, obj).exec();
    }
    delete(id: String): Promise<IMongoType> {
        return this.model.deleteOne({ _id: id }).exec();
    }
}
