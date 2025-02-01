import {Category, CategorySchemaMongo, StatusType } from '@troveed/entities';
import mongoose from 'mongoose';


export const listAllCategories = async (): Promise<Category[]> => {
    const model = mongoose.model('categories', CategorySchemaMongo);
    const categories = await model.find({ status: StatusType.ACTIVE });
    return categories;
}