import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, PipelineStage } from 'mongoose';
import { IThemeModel } from 'src/interfaces/models/theme.model.interface';
import { IThemeService } from 'src/interfaces/services/theme.service.interface';
import { IMongoType } from 'src/middlewares/utils/mongo.util';

@Injectable()
export class ThemeService implements IThemeService {
    constructor(@InjectModel("Themes") private model: Model<IThemeModel>) { }

    findAll(dynamicParameters?: PipelineStage[]): Promise<IThemeModel[]> {
        return this.model.aggregate(dynamicParameters).exec();
    }
    findById(id: String): Promise<IThemeModel> {
        return this.model.findById(id).exec();
    }
    create(obj: IThemeModel): Promise<IThemeModel> {
        const result = new this.model(obj);
        return result.save();
    }
    update(obj: IThemeModel): Promise<IMongoType> {
        return this.model.updateOne({ _id: obj._id }, obj).exec();
    }
    delete(id: String): Promise<IMongoType> {
        return this.model.deleteOne({ _id: id }).exec();
    }
}
