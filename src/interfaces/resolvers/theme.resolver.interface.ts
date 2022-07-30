import { IMongoType } from "src/middlewares/utils/mongo.util";
import { IThemeModel } from "../models/theme.model.interface";

export interface IThemeResolver {
    themes(): Promise<IThemeModel[]>;
    themeById(id: String): Promise<IThemeModel>;
    themeCreate(input: IThemeModel): Promise<IThemeModel>;
    themeUpdate(input: IThemeModel): Promise<IMongoType>;
    themeDelete(id: String): Promise<IMongoType>;
}
