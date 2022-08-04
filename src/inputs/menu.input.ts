import { Field, InputType } from "@nestjs/graphql";
import { IMenuModel } from "src/interfaces/models/menu.model.interface";
import { BaseInput } from "./base.input";

@InputType()
export class MenuCreateInput implements IMenuModel {
    @Field({ nullable: true })
    name: String;
    @Field({ nullable: true })
    description: String;
    @Field({ nullable: true })
    path: String;
    @Field({ nullable: true })
    status: Boolean;
    @Field({ nullable: true })
    sort: String;
    @Field({ nullable: true })
    children: Object;
    @Field({ nullable: true })
    _id: String;
}

@InputType()
export class MenuUpdateInput extends BaseInput implements IMenuModel {
    @Field({ nullable: true })
    name: String;
    @Field({ nullable: true })
    description: String;
    @Field({ nullable: true })
    path: String;
    @Field({ nullable: true })
    status: Boolean;
    @Field({ nullable: true })
    sort: String;
    @Field({ nullable: true })
    children: Object;
}
