import * as mongoose from 'mongoose';

export const ChapterSchema = new mongoose.Schema({
    name: String,
    impressions: Array,
    categories: Array,
    description: String,
    descriptions: Array,
    status: String,
    image_path: String,
    short_description: String,
    create_date: Date,
    showcases: Array,
    tags: Array,
    user_id: mongoose.Schema.Types.ObjectId
});