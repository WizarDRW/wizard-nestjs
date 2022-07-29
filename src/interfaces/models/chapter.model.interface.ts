import { IBaseModel } from "./base.model.interface";

export interface IChapterModel extends IBaseModel {
    readonly name: String
    readonly impressions: Array<any>
    readonly categories: Array<any>
    readonly description: String
    readonly descriptions: Array<any>
    readonly status: String
    readonly image_path: String
    readonly short_description: String
    readonly create_date: Date
    readonly showcases: Array<any>
    readonly tags: Array<any>
    readonly user_id: String
}