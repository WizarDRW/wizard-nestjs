import { ObjectType, Field } from "@nestjs/graphql";
import { IMessageModel } from "src/interfaces/models/message.model.interface";
import { MongoType } from "./mongo.type";

@ObjectType()
export class MessageType extends MongoType implements IMessageModel {
    @Field({ nullable: true })
    user_id: String;
    @Field({ nullable: true })
    messages: any[];
}
