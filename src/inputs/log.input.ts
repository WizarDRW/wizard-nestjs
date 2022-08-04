import { InputType, Field } from "@nestjs/graphql";
import { ILogModel } from "src/interfaces/models/log.model.interface";
import { BaseInput } from "./base.input";

@InputType()
export class LogCreateInput implements ILogModel {
    @Field({ nullable: true })
    user_id: String;
    @Field({ nullable: true })
    create_date: Date;
    @Field({ nullable: true })
    title: String;
    @Field({ nullable: true })
    datas: any[];
    @Field({ nullable: true })
    _id: String;
}

@InputType()
export class LogUpdateInput extends BaseInput implements ILogModel {
    @Field({ nullable: true })
    user_id: String;
    @Field({ nullable: true })
    create_date: Date;
    @Field({ nullable: true })
    title: String;
    @Field({ nullable: true })
    datas: any[];
}
