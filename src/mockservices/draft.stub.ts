import { DeleteResult, UpdateResult } from "src/middlewares/utils/mongo.util";
import { DraftType } from "src/types/draft.type";

export const draftStub = (): DraftType => ({
    "_id": "61f6f42ffb2c391314b6e749",
    create_date: new Date(),
    data: {},
    type: "",
    update_date: new Date(),
    user_id: ""
})

export const updated = (): UpdateResult => ({
    modifiedCount: 1
})

export const deleted = (): DeleteResult => ({
    deletedCount: 1
})