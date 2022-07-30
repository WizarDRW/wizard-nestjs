import { IMongoType } from "src/middlewares/utils/mongo.util";
import { IOptionModel } from "../models/option.model.interface";

export interface IOptionResolver {
    options(): Promise<IOptionModel[]>;
    optionById(id: String): Promise<IOptionModel>;
    optionCreate(input: IOptionModel): Promise<IOptionModel>;
    optionUpdate(input: IOptionModel): Promise<IMongoType>;
    optionDelete(id: String): Promise<IMongoType>;
}
