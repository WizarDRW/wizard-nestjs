import { InputType, Field } from "@nestjs/graphql";
import { IOptionModel } from "src/interfaces/models/option.model.interface";
import { BaseInput } from "./base.input";

@InputType()
export class OptionCreateInput implements IOptionModel {
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
    @Field({ nullable: true })
    _id: String;
}

@InputType()
export class OptionUpdateInput extends BaseInput implements IOptionModel {
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
