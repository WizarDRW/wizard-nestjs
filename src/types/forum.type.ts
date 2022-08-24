import { ObjectType, Field } from "@nestjs/graphql";
import { ICommentModel, IForumModel } from "src/interfaces/models/forum.model.interface";
import { MongoType } from "./mongo.type";

@ObjectType()
export class ForumType extends MongoType implements IForumModel {
    @Field({ nullable: true })
    name: String;
    @Field({ nullable: true })
    impressions: any[];
    @Field({ nullable: true })
    categories: any[];
    @Field({ nullable: true })
    description: String;
    @Field({ nullable: true })
    status: Boolean;
    @Field({ nullable: true })
    create_date: Date;
    @Field({ nullable: true })
    update_date: Date;
    @Field({ nullable: true })
    comments: ICommentModel[];
    @Field({ nullable: true })
    short_description: String;
    @Field({ nullable: true })
    tags: any[];
    @Field({ nullable: true })
    connects: any[];
    @Field({ nullable: true })
    user_id: String;
}
