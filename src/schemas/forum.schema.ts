import * as mongoose from 'mongoose';

export const ForumSchema = new mongoose.Schema({
    name: String,
    impressions: Array,
    categories: Array,
    description: String,
    status: String,
    create_date: Date,
    update_date: Date,
    comments: [{
        user_id: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
        id: Number,
        comment_id: Number,
        description: String,
        create_date: Date
    }],
    short_description: String,
    tags: Array,
    connects: Array,
    user_id: mongoose.Schema.Types.ObjectId
});