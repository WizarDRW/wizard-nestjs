import { IBaseModel } from "./base.model.interface"

export interface IAboutModel extends IBaseModel {
    readonly type: String
    readonly create_date: Date
    readonly descriptions: Object
    readonly option: Object
}
