import { IBaseModel } from "./base.model.interface";

export interface IMessageModel extends IBaseModel {
    readonly user_id: String
    readonly messages: Array<any>
}
