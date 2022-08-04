import { InputType, Field } from "@nestjs/graphql";
import { IMessageModel } from "src/interfaces/models/message.model.interface";
import { BaseInput } from "./base.input";

@InputType()
export class MessageCreateInput implements IMessageModel {
    @Field({ nullable: true })
    user_id: String;
    @Field({ nullable: true })
    messages: any[];
    @Field({ nullable: true })
    _id: String;
}

@InputType()
export class MessageUpdateInput extends BaseInput implements IMessageModel {
    @Field({ nullable: true })
    user_id: String;
    @Field({ nullable: true })
    messages: any[];
}
