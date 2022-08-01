import * as mongoose from 'mongoose';

export const MenuSchema = new mongoose.Schema({
    name: String,
    description: String,
    path: String,
    status: Boolean,
    sort: String,
    children: Object
});