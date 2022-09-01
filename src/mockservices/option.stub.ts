import { DeleteResult, UpdateResult } from "src/middlewares/utils/mongo.util";
import { OptionType } from "src/types/option.type";

export const optionStub = (): OptionType => ({
    "_id": "61f6f42ffb2c391314b6e749",
    codedby: "",
    header_logo: "",
    ico: "",
    json_social: {},
    main_logo: "",
    main_title: "",
    startus: "",
    title: ""
})

export const updated = (): UpdateResult => ({
    modifiedCount: 1
})

export const deleted = (): DeleteResult => ({
    deletedCount: 1
})