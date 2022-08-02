import { ObjectType, Field } from "@nestjs/graphql";
import { IOptionModel } from "src/interfaces/models/option.model.interface";
import { MongoType } from "./mongo.type";

@ObjectType()
export class OptionType extends MongoType implements IOptionModel {
    @Field({ nullable: true })
    json_social: Object;
    @Field({ nullable: true })
    ico: String;
    @Field({ nullable: true })
    header_logo: String;
    @Field({ nullable: true })
    main_logo: String;
    @Field({ nullable: true })
    title: String;
    @Field({ nullable: true })
    main_title: String;
    @Field({ nullable: true })
    codedby: String;
    @Field({ nullable: true })
    startus: String;
}
