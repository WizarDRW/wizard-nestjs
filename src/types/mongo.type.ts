import { Field, ID, ObjectType } from "@nestjs/graphql";
import { IBaseModel } from "src/interfaces/models/base.model.interface";

@ObjectType()
export class MongoType implements IBaseModel {
    @Field(() => ID)
    _id: String;
}
