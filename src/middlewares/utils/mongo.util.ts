import { Field, ObjectType } from "@nestjs/graphql";
// import mongoose from "mongoose";

export interface IMongoType {
    acknowledged?: Boolean;
    modifiedCount?: Number;
    upsertedCount?: Number;
    matchedCount?: Number;
    deletedCount?: Number;
}

@ObjectType()
export class UpdateResult implements IMongoType {
    @Field()
    acknowledged?: Boolean;
    @Field()
    modifiedCount?: Number;
    // @Field({ nullable: true })
    // upsertedId?: mongoose.Schema.Types.ObjectId;
    @Field()
    upsertedCount?: Number;
    @Field()
    matchedCount?: Number;
}

@ObjectType()
export class DeleteResult implements IMongoType {
    @Field()
    acknowledged?: Boolean;
    @Field()
    deletedCount?: Number;
}