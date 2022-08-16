import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, PipelineStage } from 'mongoose';
import { IUserModel } from 'src/interfaces/models/user.model.interface';
import { IUserService } from 'src/interfaces/services/user.service.interface';
import { IMongoType } from 'src/middlewares/utils/mongo.util';

@Injectable()
export class UserService implements IUserService {
    constructor(@InjectModel("Users") private model: Model<IUserModel>) { }

    findAll(dynamicParameters?: PipelineStage[]): Promise<IUserModel[]> {
        return this.model.aggregate(dynamicParameters).exec();
    }
    findById(id: String): Promise<IUserModel> {
        return this.model.findById(id).exec();
    }
    create(obj: IUserModel): Promise<IUserModel> {
        const result = new this.model(obj);
        return result.save();
    }
    update(obj: IUserModel): Promise<IMongoType> {
        return this.model.updateOne({ _id: obj._id }, obj).exec();
    }
    delete(id: String): Promise<IMongoType> {
        return this.model.deleteOne({ _id: id }).exec();
    }
}
