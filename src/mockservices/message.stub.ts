import { DeleteResult, UpdateResult } from "src/middlewares/utils/mongo.util";
import { MessageType } from "src/types/message.type";

export const messageStub = (): MessageType => ({
    "_id": "61f6f42ffb2c391314b6e749",
    messages: [],
    user_id: ""
})

export const updated = (): UpdateResult => ({
    modifiedCount: 1
})

export const deleted = (): DeleteResult => ({
    deletedCount: 1
})