import { Result, Category, CategorySchemaMongo, StatusType } from '@troveed/entities';
import mongoose from 'mongoose';

interface Params {
    page: number;
    limit: number;
}

export const listAllCategories = async ({ page = 1, limit = 10}: Params): Promise<Result<Category>> => {
    const model = mongoose.model('categories', CategorySchemaMongo);
    const pageSize = limit;
    const skip = (page - 1) * pageSize;

    const total = await model.countDocuments({ status: StatusType.ACTIVE });
    const items = await model.find({ status: StatusType.ACTIVE })
    .skip(skip)
    .limit(pageSize)
    .sort({ createdAt: -1 });
    console.log('los items que se traen de categorias son:', items)

    const pages = Math.ceil(total / pageSize);

    const hasPreviousPage = page > 1;
    const previousPage = hasPreviousPage ? page - 1 : page;
    const hasNextPage = page < pages;
    const nextPage = hasNextPage ? page + 1 : page;

    
    return {
        count: total,
        items,
        pageInfo: {
            page,
            pages,
            hasPreviousPage,
            hasNextPage,
            nextPage,
            previousPage
        }
    };
}