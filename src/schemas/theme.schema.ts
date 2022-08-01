import * as mongoose from 'mongoose';

export const ThemeSchema = new mongoose.Schema({
    name: String,
    mode: String,
    base_colors: Array,
    color_scss: Object
});