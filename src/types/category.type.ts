import { Field, ObjectType } from "@nestjs/graphql";
import { ICategoryModel } from "src/interfaces/models/category.model.interface";
import { MongoType } from "./mongo.type";

@ObjectType()
export class CategoryType extends MongoType implements ICategoryModel {
    @Field({ nullable: true })
    type: String;
    @Field({ nullable: true })
    categories: any[];
}
