import { Result, Place, PlaceSchemaMongo, StatusType } from "@troveed/entities";
import mongoose from "mongoose";

interface Params {
    page: number;
    limit: number;
}

export const listAllPlaces = async ({ page = 1, limit = 10}: Params): Promise<Result<Place>> => {
    const model = await mongoose.model("places", PlaceSchemaMongo);

    const pageSize = limit;
    const skip = (page - 1) * pageSize;
    const total = await model.countDocuments();

    const items = await model.find({ status: StatusType.ACTIVE })
        .skip(skip)
        .limit(pageSize)
        .sort({ createdAt: -1 });

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