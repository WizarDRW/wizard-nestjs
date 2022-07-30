import { IMongoType } from "src/middlewares/utils/mongo.util";
import { ICategoryModel } from "../models/category.model.interface";

export interface ICategoryResolver {
    categories(): Promise<ICategoryModel[]>;
    categoryById(id: String): Promise<ICategoryModel>;
    categoryCreate(input: ICategoryModel): Promise<ICategoryModel>;
    categoryUpdate(input: ICategoryModel): Promise<IMongoType>;
    categoryDelete(id: String): Promise<IMongoType>;
}
