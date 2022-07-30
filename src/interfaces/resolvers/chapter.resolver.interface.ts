import { IMongoType } from "src/middlewares/utils/mongo.util";
import { IChapterModel } from "../models/chapter.model.interface";

export interface IChapterResolver {
    chapters(): Promise<IChapterModel[]>;
    chapterById(id: String): Promise<IChapterModel>;
    chapterCreate(input: IChapterModel): Promise<IChapterModel>;
    chapterUpdate(input: IChapterModel): Promise<IMongoType>;
    chapterDelete(id: String): Promise<IMongoType>;
}
