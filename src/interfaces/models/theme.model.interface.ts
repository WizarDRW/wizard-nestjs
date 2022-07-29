import { IBaseModel } from "./base.model.interface";

export interface IThemeModel extends IBaseModel {
    readonly name: String
    readonly mode: String
    readonly base_colors: Array<any>
    readonly color_scss: Object
}
