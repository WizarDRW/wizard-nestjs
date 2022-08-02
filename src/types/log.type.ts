import { ObjectType, Field } from "@nestjs/graphql";
import { ILogModel } from "src/interfaces/models/log.model.interface";
import { MongoType } from "./mongo.type";

@ObjectType()
export class LogType extends MongoType implements ILogModel {
    @Field({ nullable: true })
    user_id: String;
    @Field({ nullable: true })
    create_date: Date;
    @Field({ nullable: true })
    title: String;
    @Field({ nullable: true })
    datas: any[];
}
