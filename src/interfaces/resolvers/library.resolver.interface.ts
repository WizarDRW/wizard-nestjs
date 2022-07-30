import { IMongoType } from "src/middlewares/utils/mongo.util";
import { ILibraryModel } from "../models/library.model.interface";

export interface ILibraryResolver {
    libraries(): Promise<ILibraryModel[]>;
    libraryById(id: String): Promise<ILibraryModel>;
    libraryCreate(input: ILibraryModel): Promise<ILibraryModel>;
    libraryUpdate(input: ILibraryModel): Promise<IMongoType>;
    libraryDelete(id: String): Promise<IMongoType>;
}
