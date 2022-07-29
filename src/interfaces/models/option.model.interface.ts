import { IBaseModel } from "./base.model.interface";

export interface IOptionModel extends IBaseModel {
    readonly json_social: Object
    readonly ico: String
    readonly header_logo: String
    readonly main_logo: String
    readonly title: String
    readonly main_title: String
    readonly codedby: String
    readonly startus: String
}
