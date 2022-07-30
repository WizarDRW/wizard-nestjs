import { IMongoType } from "src/middlewares/utils/mongo.util";
import { IUserOptionModel } from "../models/user.option.model.interface";

export interface IUserOptionResolver {
    userOptions(): Promise<IUserOptionModel[]>;
    userOptionById(id: String): Promise<IUserOptionModel>;
    userOptionCreate(input: IUserOptionModel): Promise<IUserOptionModel>;
    userOptionUpdate(input: IUserOptionModel): Promise<IMongoType>;
    userOptionDelete(id: String): Promise<IMongoType>;
}
