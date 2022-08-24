import { DeleteResult, UpdateResult } from "src/middlewares/utils/mongo.util";
import { ChapterType } from "src/types/chapter.type";

export const chapterStub = (): ChapterType => ({
    "_id": "61f6f42ffb2c391314b6e749",
    categories: [],
    create_date: new Date(),
    description: "Test",
    descriptions: [],
    image_path: "",
    impressions: [],
    name: "Test",
    short_description: "",
    showcases: [],
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