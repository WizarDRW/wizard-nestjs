import { DeleteResult, UpdateResult } from "src/middlewares/utils/mongo.util";
import { ForumType } from "src/types/forum.type";

export const forumStub = (): ForumType => ({
    "_id": "61f6f42ffb2c391314b6e749",
    categories: [],
    create_date: new Date(),
    description: "Test",
    comments: [],
    connects: [],
    impressions: [],
    update_date: new Date(),
    name: "Test",
    short_description: "",
    status: true,
    tags: [],
    user_id: ""
})

export const updated = (): UpdateResult => ({
    modifiedCount: 1
})

export const deleted = (): DeleteResult => ({
    deletedCount: 1
})