import { Schema } from 'mongoose';
import { Category } from './category';

export const CategorySchemaMongo = new Schema<Category>({
    name: { type: String },
    description: { type: String },
    icon: { type: String },
    image: { type: String },
});