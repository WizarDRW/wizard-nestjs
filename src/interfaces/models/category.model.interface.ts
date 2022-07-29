import { IBaseModel } from "./base.model.interface"

export interface ICategoryModel extends IBaseModel {
    readonly type: String
    readonly categories: Array<any>
}
