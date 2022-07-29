import { IBaseModel } from "./base.model.interface";

export interface ILibraryModel extends IBaseModel {
    readonly user_id: String
    readonly name: String
    readonly description: String
    readonly private: Boolean
    readonly image_path: String
    readonly contents: Array<any>
}
