import { Place, PlaceSchemaMongo, StatusType } from "@troveed/entities";
import mongoose from "mongoose";

export const createPlace = async (data: Partial<Place>) => {
    const model = mongoose.model("places", PlaceSchemaMongo);
    const place = new model({...data, status: StatusType.ACTIVE});
    const createdPlace = await place.save();
    return createdPlace;
}