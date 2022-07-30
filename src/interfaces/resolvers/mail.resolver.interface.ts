import { IMongoType } from "src/middlewares/utils/mongo.util";
import { IMailModel } from "../models/mail.model.interface";

export interface IMailResolver {
    mails(): Promise<IMailModel[]>;
    mailById(id: String): Promise<IMailModel>;
    mailCreate(input: IMailModel): Promise<IMailModel>;
    mailUpdate(input: IMailModel): Promise<IMongoType>;
    mailDelete(id: String): Promise<IMongoType>;
}
