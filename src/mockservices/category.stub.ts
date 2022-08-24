import { AboutType } from "src/types/about.type";
import { DeleteResult, UpdateResult } from "src/middlewares/utils/mongo.util";
import { CategoryType } from "src/types/category.type";

export const categoryStub = (): CategoryType => ({
    "_id": "61f6f42ffb2c391314b6e749",
    "type": "",
    categories: [1,2,3,4]
})

export const updated = (): UpdateResult => ({
    modifiedCount: 1
})

export const deleted = (): DeleteResult => ({
    deletedCount: 1
})