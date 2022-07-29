import { IBaseModel } from "./base.model.interface";

export interface ILogModel extends IBaseModel {
    readonly user_id: String
    readonly create_date: Date
    readonly title: String
    readonly datas: Array<any>
}
