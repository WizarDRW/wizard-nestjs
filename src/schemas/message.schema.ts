import * as mongoose from 'mongoose';

export const MessageSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, trim: true, ref: "users" },
    messages: [{ user_id: { type: mongoose.Schema.Types.ObjectId, ref: "users" }, messages: [{ create_date: Date, text: String, seen: Boolean }] }]
});