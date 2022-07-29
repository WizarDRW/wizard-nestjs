import { IBaseModel } from "./base.model.interface";

export interface IForumModel extends IBaseModel {
    readonly name: String
    readonly impressions: Array<any>
    readonly categories: Array<any>
    readonly description: String
    readonly status: String
    readonly create_date: Date
    readonly update_date: Date
    readonly comments: Array<ICommentModel>
    readonly short_description: String
    readonly tags: Array<any>
    readonly connects: Array<any>
    readonly user_id: String
}

export interface ICommentModel {
    readonly user_id: String
    readonly id: Number
    readonly comment_id: Number
    readonly description: String
    readonly create_date: Date
}