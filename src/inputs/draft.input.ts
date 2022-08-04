import { InputType, Field } from "@nestjs/graphql";
import { IDraftModel } from "src/interfaces/models/draft.model.interface";
import { BaseInput } from "./base.input";

@InputType()
export class DraftCreateInput implements IDraftModel {
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
    @Field({ nullable: true })
    _id: String;
}

@InputType()
export class DraftUpdateInput extends BaseInput implements IDraftModel {
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
