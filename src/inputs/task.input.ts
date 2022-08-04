import { InputType, Field } from "@nestjs/graphql";
import { ITaskModel } from "src/interfaces/models/task.model.interface";
import { BaseInput } from "./base.input";

@InputType()
export class TaskCreateInput implements ITaskModel {
    @Field({ nullable: true })
    _id: String;
}

@InputType()
export class TaskUpdateInput extends BaseInput implements ITaskModel {}
