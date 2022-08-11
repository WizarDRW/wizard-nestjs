import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PipelineStage, Model } from 'mongoose';
import { ILibraryModel } from 'src/interfaces/models/library.model.interface';
import { ILibraryService } from 'src/interfaces/services/library.service.interface';
import { IMongoType } from 'src/middlewares/utils/mongo.util';

@Injectable()
export class LibraryService implements ILibraryService {
    constructor(@InjectModel("Libraries") private model: Model<ILibraryModel>) { }
    findAll(dynamicParameters?: PipelineStage[]): Promise<ILibraryModel[]> {
        return this.model.aggregate(dynamicParameters).exec();
    }
    findById(id: String): Promise<ILibraryModel> {
        return this.model.findById(id).exec();
    }
    create(obj: ILibraryModel): Promise<ILibraryModel> {
        const result = new this.model(obj);
        return result.save();
    }
    update(obj: ILibraryModel): Promise<IMongoType> {
        return this.model.updateOne({ _id: obj._id }, obj).exec();
    }
    delete(id: String): Promise<IMongoType> {
        return this.model.deleteOne({ _id: id }).exec();
    }
}
