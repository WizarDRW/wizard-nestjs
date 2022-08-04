import { InputType, Field } from "@nestjs/graphql";
import { ICategoryModel } from "src/interfaces/models/category.model.interface";
import { BaseInput } from "./base.input";

@InputType()
export class CategoryCreateInput implements ICategoryModel {
    @Field({ nullable: true })
    type: String;
    @Field({ nullable: true })
    categories: any[];
    @Field({ nullable: true })
    _id: String;
}

@InputType()
export class CategoryUpdateInput extends BaseInput implements ICategoryModel {
    @Field({ nullable: true })
    type: String;
    @Field({ nullable: true })
    categories: any[];
}
