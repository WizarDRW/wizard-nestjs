import { DeleteResult, UpdateResult } from "src/middlewares/utils/mongo.util";
import { UserType } from "src/types/user.type";

export const userStub = (): UserType => ({
    "_id": "61f6f42ffb2c391314b6e749",
    connections: [],
    create_date: new Date(),
    description: "",
    email: "",
    first_name: "",
    image_path: "",
    last_name: "",
    password: "",
    role: "",
    status: "",
    title: "",
    type: "",
    update_date: new Date(),
    username: ""
})

export const updated = (): UpdateResult => ({
    modifiedCount: 1
})

export const deleted = (): DeleteResult => ({
    deletedCount: 1
})