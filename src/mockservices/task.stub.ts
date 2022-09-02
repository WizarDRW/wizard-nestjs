import { DeleteResult, UpdateResult } from "src/middlewares/utils/mongo.util";
import { TaskType } from "src/types/task.type";

export const taskStub = (): TaskType => ({
    "_id": "61f6f42ffb2c391314b6e749"
})

export const updated = (): UpdateResult => ({
    modifiedCount: 1
})

export const deleted = (): DeleteResult => ({
    deletedCount: 1
})