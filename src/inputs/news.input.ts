import { InputType, Field } from "@nestjs/graphql";
import { INewsModel } from "src/interfaces/models/news.model.interface";
import { BaseInput } from "./base.input";

@InputType()
export class NewsCreateInput implements INewsModel {
    @Field({ nullable: true })
    name: String;
    @Field({ nullable: true })
    impressions: any[];
    @Field({ nullable: true })
    categories: any[];
    @Field({ nullable: true })
    description: String;
    @Field({ nullable: true })
    descriptions: any[];
    @Field({ nullable: true })
    status: String;
    @Field({ nullable: true })
    image_path: String;
    @Field({ nullable: true })
    short_description: String;
    @Field({ nullable: true })
    create_date: Date;
    @Field({ nullable: true })
    showcases: any[];
    @Field({ nullable: true })
    tags: any[];
    @Field({ nullable: true })
    connects: any[];
    @Field({ nullable: true })
    user_id: String;
    @Field({ nullable: true })
    _id: String;
}

@InputType()
export class NewsUpdateInput extends BaseInput implements INewsModel {
    @Field({ nullable: true })
    name: String;
    @Field({ nullable: true })
    impressions: any[];
    @Field({ nullable: true })
    categories: any[];
    @Field({ nullable: true })
    description: String;
    @Field({ nullable: true })
    descriptions: any[];
    @Field({ nullable: true })
    status: String;
    @Field({ nullable: true })
    image_path: String;
    @Field({ nullable: true })
    short_description: String;
    @Field({ nullable: true })
    create_date: Date;
    @Field({ nullable: true })
    showcases: any[];
    @Field({ nullable: true })
    tags: any[];
    @Field({ nullable: true })
    connects: any[];
    @Field({ nullable: true })
    user_id: String;
}
