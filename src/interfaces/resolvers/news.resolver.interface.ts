import { IMongoType } from "src/middlewares/utils/mongo.util";
import { INewsModel } from "../models/news.model.interface";

export interface INewsResolver {
    news(): Promise<INewsModel[]>;
    newsById(id: String): Promise<INewsModel>;
    newsCreate(input: INewsModel): Promise<INewsModel>;
    newsUpdate(input: INewsModel): Promise<IMongoType>;
    newsDelete(id: String): Promise<IMongoType>;
}
