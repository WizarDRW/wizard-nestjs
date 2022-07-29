import { IBaseModel } from "./base.model.interface";

export interface IUserModel extends IBaseModel {
    readonly first_name: String
    readonly last_name: String
    readonly username: String
    readonly email: String
    readonly password: String
    readonly image_path: String
    readonly description: String
    readonly role: String
    readonly title: String
    readonly status: String
    readonly create_date: Date
    readonly update_date: Date
    readonly connections: Array<any>
    readonly type: String
}
