import { InputType, Field } from "@nestjs/graphql";
import { IThemeModel } from "src/interfaces/models/theme.model.interface";
import { BaseInput } from "./base.input";

@InputType()
export class ThemeCreateInput implements IThemeModel {
    @Field({ nullable: true })
    name: String;
    @Field({ nullable: true })
    mode: String;
    @Field({ nullable: true })
    base_colors: any[];
    @Field({ nullable: true })
    color_scss: Object;
    @Field({ nullable: true })
    _id: String;
}

@InputType()
export class ThemeUpdateInput extends BaseInput implements IThemeModel {
    @Field({ nullable: true })
    name: String;
    @Field({ nullable: true })
    mode: String;
    @Field({ nullable: true })
    base_colors: any[];
    @Field({ nullable: true })
    color_scss: Object;
}
