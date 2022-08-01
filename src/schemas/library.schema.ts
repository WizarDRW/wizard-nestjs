import * as mongoose from 'mongoose';

export const LibrarySchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, trim: true, ref: "users" },
    name: String,
    description: String,
    private: Boolean,
    image_path: String,
    contents: [{ type: mongoose.Schema.Types.ObjectId }]
});