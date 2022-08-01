import * as mongoose from 'mongoose';

export const LogSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, trim: true, ref: "users" },
    create_date: Date,
    title: String,
    datas: Array
});