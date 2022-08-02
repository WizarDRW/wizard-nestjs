import { ObjectType, Field } from "@nestjs/graphql";
import { IThemeModel } from "src/interfaces/models/theme.model.interface";
import { MongoType } from "./mongo.type";

@ObjectType()
export class ThemeType extends MongoType implements IThemeModel {
    @Field({ nullable: true })
    name: String;
    @Field({ nullable: true })
    mode: String;
    @Field({ nullable: true })
    base_colors: any[];
    @Field({ nullable: true })
    color_scss: Object;
}
