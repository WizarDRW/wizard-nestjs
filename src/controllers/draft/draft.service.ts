import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PipelineStage, Model } from 'mongoose';
import { IDraftModel } from 'src/interfaces/models/draft.model.interface';
import { IDraftService } from 'src/interfaces/services/draft.service.interface';
import { IMongoType } from 'src/middlewares/utils/mongo.util';

@Injectable()
export class DraftService implements IDraftService {
    constructor(@InjectModel("Drafts") private model: Model<IDraftModel>) { }

    findAll(dynamicParameters?: PipelineStage[]): Promise<IDraftModel[]> {
        return this.model.aggregate(dynamicParameters).exec();
    }
    findById(id: String): Promise<IDraftModel> {
        return this.model.findById(id).exec();
    }
    create(obj: IDraftModel): Promise<IDraftModel> {
        const result = new this.model(obj);
        return result.save();
    }
    update(obj: IDraftModel): Promise<IMongoType> {
        return this.model.updateOne({ _id: obj._id }, obj).exec();
    }
    delete(id: String): Promise<IMongoType> {
        return this.model.deleteOne({ _id: id }).exec();
    }
}
