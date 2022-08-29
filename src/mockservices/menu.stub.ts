import { DeleteResult, UpdateResult } from "src/middlewares/utils/mongo.util";
import { MenuType } from "src/types/menu.type";

export const menuStub = (): MenuType => ({
    "_id": "61f6f42ffb2c391314b6e749",
    children: [],
    description: "",
    name: "",
    path: "",
    sort: "",
    status: false
})

export const updated = (): UpdateResult => ({
    modifiedCount: 1
})

export const deleted = (): DeleteResult => ({
    deletedCount: 1
})