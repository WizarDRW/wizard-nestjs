import { ObjectType, Field } from "@nestjs/graphql";
import { ILibraryModel } from "src/interfaces/models/library.model.interface";
import { MongoType } from "./mongo.type";

@ObjectType()
export class LibraryType extends MongoType implements ILibraryModel {
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
