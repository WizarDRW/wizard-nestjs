import { Field, ObjectType } from "@nestjs/graphql";
import { IAboutModel } from "src/interfaces/models/about.model.interface";
import { MongoType } from "./mongo.type";

@ObjectType()
export class AboutType extends MongoType implements IAboutModel {
    @Field({ nullable: true })
    type: String;
    @Field({ nullable: true })
    create_date: Date;
    @Field({ nullable: true })
    descriptions: Object;
    @Field({ nullable: true })
    option: Object;
}
