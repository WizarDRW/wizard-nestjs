import { ObjectType, Field } from "@nestjs/graphql";
import { IPasswordOptionModel, IUserOptionModel } from "src/interfaces/models/user.option.model.interface";
import { MongoType } from "./mongo.type";

@ObjectType()
export class UserOptionType extends MongoType implements IUserOptionModel {
    @Field({ nullable: true })
    user_id: String;
    @Field({ nullable: true })
    isViewFirstName: Boolean;
    @Field({ nullable: true })
    isViewLastName: Boolean;
    @Field({ nullable: true })
    isReveseFullName: Boolean;
    @Field({ nullable: true })
    isViewUserName: Boolean;
    @Field({ nullable: true })
    isViewEmail: Boolean;
    @Field({ nullable: true })
    isViewImagePath: Boolean;
    @Field({ nullable: true })
    isViewDescription: Boolean;
    @Field({ nullable: true })
    isViewRole: Boolean;
    @Field({ nullable: true })
    isViewTitle: Boolean;
    @Field({ nullable: true })
    isViewCreateDate: Boolean;
    @Field({ nullable: true })
    dark: String;
    @Field({ nullable: true })
    light: String;
    @Field({ nullable: true })
    passwordOptions: PasswordOptionType[];
}

@ObjectType()
class PasswordOptionType extends MongoType implements IPasswordOptionModel {
    @Field({ nullable: true })
    isPrivateKey: Boolean;
    @Field({ nullable: true })
    privateKey: String;
    @Field({ nullable: true })
    minLength: Number;
    @Field({ nullable: true })
    maxLength: Number;
    @Field({ nullable: true })
    isIrregularCharracter: Boolean;
    @Field({ nullable: true })
    minIrregularCharracterLength: Number;
    @Field({ nullable: true })
    maxIrregularCharracterLength: Number;
    @Field({ nullable: true })
    isUpperCase: Boolean;
    @Field({ nullable: true })
    minUpperCaseLength: Number;
    @Field({ nullable: true })
    maxUpperCaseLength: Number;
    @Field({ nullable: true })
    isLowerCase: Boolean;
    @Field({ nullable: true })
    minLowerCaseLength: Number;
    @Field({ nullable: true })
    maxLowerCaseLength: Number;
    @Field({ nullable: true })
    isNumber: Boolean;
    @Field({ nullable: true })
    minNumberLength: Number;
    @Field({ nullable: true })
    maxNumberLength: Number;
}