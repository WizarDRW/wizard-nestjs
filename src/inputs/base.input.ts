import { Field, ID, InputType } from "@nestjs/graphql";
import { IBaseModel } from "src/interfaces/models/base.model.interface";

@InputType()
export class BaseInput implements IBaseModel {
    @Field(() => ID)
    _id: String;
}