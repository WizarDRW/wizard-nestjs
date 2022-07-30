import { IMongoType } from "src/middlewares/utils/mongo.util";
import { IForumModel } from "../models/forum.model.interface";

export interface IForumResolver {
    forums(): Promise<IForumModel[]>;
    forumById(id: String): Promise<IForumModel>;
    forumCreate(input: IForumModel): Promise<IForumModel>;
    forumUpdate(input: IForumModel): Promise<IMongoType>;
    forumDelete(id: String): Promise<IMongoType>;
}
