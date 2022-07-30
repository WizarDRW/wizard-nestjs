import { IMongoType } from "src/middlewares/utils/mongo.util";
import { IMessageModel } from "../models/message.model.interface";

export interface IMessageResolver {
    messages(): Promise<IMessageModel[]>;
    messageById(id: String): Promise<IMessageModel>;
    messageCreate(input: IMessageModel): Promise<IMessageModel>;
    messageUpdate(input: IMessageModel): Promise<IMongoType>;
    messageDelete(id: String): Promise<IMongoType>;
}
