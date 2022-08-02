import { ObjectType, Field } from "@nestjs/graphql";
import { IDraftModel } from "src/interfaces/models/draft.model.interface";
import { MongoType } from "./mongo.type";

@ObjectType()
export class DraftType extends MongoType implements IDraftModel {
    @Field({ nullable: true })
    user_id: String;
    @Field({ nullable: true })
    create_date: Date;
    @Field({ nullable: true })
    update_date: Date;
    @Field({ nullable: true })
    type: String;
    @Field({ nullable: true })
    data: Object;
}
