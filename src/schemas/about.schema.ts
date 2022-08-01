import * as mongoose from 'mongoose';

export const AboutSchema = new mongoose.Schema({
    type: String,
    create_date: Date,
    descriptions: Object,
    option: Object
});