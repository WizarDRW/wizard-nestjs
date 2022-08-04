import { Field, InputType } from "@nestjs/graphql";
import { ILibraryModel } from "src/interfaces/models/library.model.interface";
import { BaseInput } from "./base.input";

@InputType()
export class LibraryCreateInput implements ILibraryModel {
    @Field({ nullable: true })
    user_id: String;
    @Field({ nullable: true })
    name: String;
    @Field({ nullable: true })
    description: String;
    @Field({ nullable: true })
    private: Boolean;
    @Field({ nullable: true })
    image_path: String;
    @Field({ nullable: true })
    contents: any[];
    @Field({ nullable: true })
    _id: String;
}

@InputType()
export class LibraryUpdateInput extends BaseInput implements ILibraryModel {
    @Field({ nullable: true })
    user_id: String;
    @Field({ nullable: true })
    name: String;
    @Field({ nullable: true })
    description: String;
    @Field({ nullable: true })
    private: Boolean;
    @Field({ nullable: true })
    image_path: String;
    @Field({ nullable: true })
    contents: any[];
}
