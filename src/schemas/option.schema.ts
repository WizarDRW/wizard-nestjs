import * as mongoose from 'mongoose';

export const OptionSchema = new mongoose.Schema({
    json_social: Object,
    ico: String,
    header_logo: String,
    main_logo: String,
    title: String,
    main_title: String,
    codedby: String,
    startus: String
});