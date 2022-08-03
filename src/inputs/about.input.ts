import { Field, InputType } from "@nestjs/graphql";
import { IAboutModel } from "src/interfaces/models/about.model.interface";
import { BaseInput } from "./base.input";

@InputType()
export class AboutCreateInput implements IAboutModel {
    @Field({ nullable: true })
    type: String;
    @Field({ nullable: true })
    create_date: Date;
    @Field({ nullable: true })
    descriptions: Object;
    @Field({ nullable: true })
    option: Object;
    @Field({ nullable: true })
    _id: String;
}

@InputType()
export class AboutUpdateInput extends BaseInput implements IAboutModel {
    @Field({ nullable: true })
    type: String;
    @Field({ nullable: true })
    create_date: Date;
    @Field({ nullable: true })
    descriptions: Object;
    @Field({ nullable: true })
    option: Object;
}
