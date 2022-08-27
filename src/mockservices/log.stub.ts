import { DeleteResult, UpdateResult } from "src/middlewares/utils/mongo.util";
import { LogType } from "src/types/log.type";

export const logStub = (): LogType => ({
    "_id": "61f6f42ffb2c391314b6e749",
    create_date: new Date(),
    datas: [],
    title: "",
    user_id: ""
})

export const updated = (): UpdateResult => ({
    modifiedCount: 1
})

export const deleted = (): DeleteResult => ({
    deletedCount: 1
})