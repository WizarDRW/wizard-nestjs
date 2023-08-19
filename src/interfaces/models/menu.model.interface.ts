import { IBaseModel } from "./base.model.interface";

export interface IMenuModel extends IBaseModel {
    readonly name?: String
    readonly description?: String
    readonly path?: String
    readonly status?: Boolean
    readonly sort?: String
    readonly children?: Array<Object>
}
