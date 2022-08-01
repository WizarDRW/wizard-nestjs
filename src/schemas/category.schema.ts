import * as mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema({
    type: String,
    categories: Array
});