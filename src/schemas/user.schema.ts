import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    username: String,
    email: String,
    password: String,
    image_path: String,
    description: String,
    role: String,
    title: String,
    status: String,
    create_date: Date,
    update_date: Date,
    connections: Array,
    type: String
});