import { IMongoType } from "src/middlewares/utils/mongo.util";
import { IDraftModel } from "../models/draft.model.interface";

export interface IDraftResolver {
    drafts(): Promise<IDraftModel[]>;
    draftById(id: String): Promise<IDraftModel>;
    draftCreate(input: IDraftModel): Promise<IDraftModel>;
    draftUpdate(input: IDraftModel): Promise<IMongoType>;
    draftDelete(id: String): Promise<IMongoType>;
}
