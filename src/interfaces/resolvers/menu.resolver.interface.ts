import { IMongoType } from "src/middlewares/utils/mongo.util";
import { IMenuModel } from "../models/menu.model.interface";

export interface IMenuResolver {
    menus(): Promise<IMenuModel[]>;
    menuById(id: String): Promise<IMenuModel>;
    menuCreate(input: IMenuModel): Promise<IMenuModel>;
    menuUpdate(input: IMenuModel): Promise<IMongoType>;
    menuDelete(id: String): Promise<IMongoType>;
}
