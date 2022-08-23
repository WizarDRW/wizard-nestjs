import { AboutType } from "src/types/about.type";
import { DeleteResult, UpdateResult } from "src/middlewares/utils/mongo.util";

export const aboutStub = (): AboutType => ({
    "_id": "61f6f42ffb2c391314b6e749",
    "create_date": new Date(),
    "descriptions": "Test",
    "option": null,
    "type": ""
})

export const updated = (): UpdateResult => ({
    modifiedCount: 1
})

export const deleted = (): DeleteResult => ({
    deletedCount: 1
})