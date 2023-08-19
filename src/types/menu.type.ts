import { ObjectType, Field } from "@nestjs/graphql";
import { IMenuModel } from "src/interfaces/models/menu.model.interface";
import { MongoType } from "./mongo.type";

@ObjectType()
export class MenuType extends MongoType implements IMenuModel {
    @Field({ nullable: true })
    name?: String;
    @Field({ nullable: true })
    description?: String;
    @Field({ nullable: true })
    path?: String;
    @Field({ nullable: true })
    status?: Boolean;
    @Field({ nullable: true })
    sort?: String;
    @Field(type => [MenuType], { nullable: true })
    children?: Array<MenuType>;
}
