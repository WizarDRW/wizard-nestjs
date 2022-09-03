import { DeleteResult, UpdateResult } from "src/middlewares/utils/mongo.util";
import { ThemeType } from "src/types/theme.type";

export const themeStub = (): ThemeType => ({
    "_id": "61f6f42ffb2c391314b6e749",
    base_colors: [],
    color_scss: "",
    mode: "",
    name: ""
})

export const updated = (): UpdateResult => ({
    modifiedCount: 1
})

export const deleted = (): DeleteResult => ({
    deletedCount: 1
})