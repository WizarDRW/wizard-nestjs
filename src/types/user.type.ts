import { ObjectType, Field } from "@nestjs/graphql";
import { IUserModel } from "src/interfaces/models/user.model.interface";
import { MongoType } from "./mongo.type";

@ObjectType()
export class UserType extends MongoType implements IUserModel {
    @Field({ nullable: true })
    first_name: String;
    @Field({ nullable: true })
    last_name: String;
    @Field({ nullable: true })
    username: String;
    @Field({ nullable: true })
    email: String;
    @Field({ nullable: true })
    password: String;
    @Field({ nullable: true })
    image_path: String;
    @Field({ nullable: true })
    description: String;
    @Field({ nullable: true })
    role: String;
    @Field({ nullable: true })
    title: String;
    @Field({ nullable: true })
    status: String;
    @Field({ nullable: true })
    create_date: Date;
    @Field({ nullable: true })
    update_date: Date;
    @Field({ nullable: true })
    connections: any[];
    @Field({ nullable: true })
    type: String;
}
