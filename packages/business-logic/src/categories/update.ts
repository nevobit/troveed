import { Category, CategorySchemaMongo } from '@troveed/entities';
import mongoose from 'mongoose';

export const updateCategory = async (data: Partial<Category>) => {
    const model = mongoose.model("categories", CategorySchemaMongo);
    const updatedCategory = await model.findByIdAndUpdate(data.id, data);
    return updatedCategory;
}