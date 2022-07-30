import { IMongoType } from "src/middlewares/utils/mongo.util";
import { IAboutModel } from "../models/about.model.interface";

export interface IAboutResolver {
    abouts(): Promise<IAboutModel[]>;
    aboutById(id: String): Promise<IAboutModel>;
    aboutCreate(input: IAboutModel): Promise<IAboutModel>;
    aboutUpdate(input: IAboutModel): Promise<IMongoType>;
    aboutDelete(id: String): Promise<IMongoType>;
}
