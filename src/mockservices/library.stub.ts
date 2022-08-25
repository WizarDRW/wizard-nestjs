import { DeleteResult, UpdateResult } from "src/middlewares/utils/mongo.util";
import { LibraryType } from "src/types/library.type";

export const libraryStub = (): LibraryType => ({
    "_id": "61f6f42ffb2c391314b6e749",
    contents: [],
    description: "",
    image_path: "",
    name: "",
    private: false,
    user_id: ""
})

export const updated = (): UpdateResult => ({
    modifiedCount: 1
})

export const deleted = (): DeleteResult => ({
    deletedCount: 1
})