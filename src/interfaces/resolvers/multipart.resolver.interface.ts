import { IMongoType } from "src/middlewares/utils/mongo.util";
import { IMultipartModel } from "../models/multipart.model.interface";

export interface IMultipartResolver {
    multiparts(): Promise<IMultipartModel[]>;
    multipartById(id: String): Promise<IMultipartModel>;
    multipartCreate(input: IMultipartModel): Promise<IMultipartModel>;
    multipartUpdate(input: IMultipartModel): Promise<IMongoType>;
    multipartDelete(id: String): Promise<IMongoType>;
}
