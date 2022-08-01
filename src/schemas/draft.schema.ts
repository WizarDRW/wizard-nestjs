import * as mongoose from 'mongoose';

export const DraftSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, trim: true, ref: "users" },
    create_date: Date,
    update_date: Date,
    type: String,
    data: Object
});