import { Category, CategorySchemaMongo } from '@troveed/entities';
import mongoose from 'mongoose';

export const createCategory = async (data: Partial<Category>) => {
    const model = mongoose.model('categories', CategorySchemaMongo);
    const category = new model(data);
    const createdCategory = await category.save();
    return createdCategory;
}