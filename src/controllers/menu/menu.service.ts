import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PipelineStage, Model } from 'mongoose';
import { IMenuModel } from 'src/interfaces/models/menu.model.interface';
import { IMenuService } from 'src/interfaces/services/menu.service.interface';
import { IMongoType } from 'src/middlewares/utils/mongo.util';

@Injectable()
export class MenuService implements IMenuService {
    constructor(@InjectModel("Menus") private model: Model<IMenuModel>) { }

    findAll(dynamicParameters?: PipelineStage[]): Promise<IMenuModel[]> {
        return this.model.aggregate(dynamicParameters).exec();
    }
    findById(id: String): Promise<IMenuModel> {
        return this.model.findById(id).exec();
    }
    create(obj: IMenuModel): Promise<IMenuModel> {
        const result = new this.model(obj);
        return result.save();
    }
    update(obj: IMenuModel): Promise<IMongoType> {
        return this.model.updateOne({ _id: obj._id }, obj).exec();
    }
    delete(id: String): Promise<IMongoType> {
        return this.model.deleteOne({ _id: id }).exec();
    }
}
