import { DeleteResult, UpdateResult } from "src/middlewares/utils/mongo.util";
import { UserOptionType } from "src/types/user.option.type";

export const userOptionStub = (): UserOptionType => ({
    "_id": "61f6f42ffb2c391314b6e749",
    dark: "",
    isReveseFullName: true,
    isViewCreateDate: true,
    isViewDescription: false,
    isViewEmail: true,
    isViewFirstName: false,
    isViewImagePath: false,
    isViewLastName: false,
    isViewRole: false,
    isViewTitle: true,
    isViewUserName: false,
    light: "",
    passwordOptions: [],
    user_id: ""
})

export const updated = (): UpdateResult => ({
    modifiedCount: 1
})

export const deleted = (): DeleteResult => ({
    deletedCount: 1
})