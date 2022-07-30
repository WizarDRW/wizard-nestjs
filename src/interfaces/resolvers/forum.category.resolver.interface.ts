import { IMongoType } from "src/middlewares/utils/mongo.util";
import { IForumCategoryModel } from "../models/forum.category.model.interface";

export interface IForumCategoryResolver {
    forumCategories(): Promise<IForumCategoryModel[]>;
    forumCategoryById(id: String): Promise<IForumCategoryModel>;
    forumCategoryCreate(input: IForumCategoryModel): Promise<IForumCategoryModel>;
    forumCategoryUpdate(input: IForumCategoryModel): Promise<IMongoType>;
    forumCategoryDelete(id: String): Promise<IMongoType>;
}
