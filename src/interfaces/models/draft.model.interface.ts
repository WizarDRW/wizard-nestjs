import { IBaseModel } from "./base.model.interface";

export interface IDraftModel extends IBaseModel {
    readonly user_id: String
    readonly create_date: Date
    readonly update_date: Date
    readonly type: String
    readonly data: Object
}
