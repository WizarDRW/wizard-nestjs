import { IMongoType } from "src/middlewares/utils/mongo.util";
import { ILogModel } from "../models/log.model.interface";

export interface ILogResolver {
    logs(): Promise<ILogModel[]>;
    logById(id: String): Promise<ILogModel>;
    logCreate(input: ILogModel): Promise<ILogModel>;
    logUpdate(input: ILogModel): Promise<IMongoType>;
    logDelete(id: String): Promise<IMongoType>;
}
