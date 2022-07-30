import { IMongoType } from "src/middlewares/utils/mongo.util";
import { IUserModel } from "../models/user.model.interface";

export interface IUserResolver {
    users(): Promise<IUserModel[]>;
    userById(id: String): Promise<IUserModel>;
    userCreate(input: IUserModel): Promise<IUserModel>;
    userUpdate(input: IUserModel): Promise<IMongoType>;
    userDelete(id: String): Promise<IMongoType>;
}
