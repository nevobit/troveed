import { CategorySchemaMongo } from '@troveed/entities';
import mongoose from 'mongoose';

export const findCategoryById = async (id: string) => {
    const model = mongoose.model("categories", CategorySchemaMongo);
    const category = await model.findById(id);
    return category;
}



