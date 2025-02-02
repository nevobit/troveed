import { Category, CategorySchemaMongo, StatusType } from '@troveed/entities';
import mongoose from 'mongoose';


export const deleteCategory = async (data: Partial<Category>) => {
    const model = mongoose.model('categories', CategorySchemaMongo);
    //logic erased
    const deletedCategory = await model.findByIdAndUpdate(data.id, { status: StatusType.DELETED });
    return deletedCategory;
}