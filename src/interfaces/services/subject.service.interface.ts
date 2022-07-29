import { PipelineStage } from "mongoose";
import { IMongoType } from "src/middlewares/utils/mongo.util";

export interface ISubjectService<IModel> {
    findAll(dynamicParameters?: PipelineStage[]): Promise<IModel[]>;
    findById(id: String): Promise<IModel>;
    create(obj: IModel): Promise<IModel>;
    update(obj: IModel): Promise<IMongoType>;
    delete(id: String): Promise<IMongoType>;
}
