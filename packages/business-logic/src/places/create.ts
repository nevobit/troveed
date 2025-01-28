import { Place, PlaceSchemaMongo } from "@troveed/entities";
import mongoose from "mongoose";

export const createPlace = async (data: Partial<Place>) => {
    const model = mongoose.model("places", PlaceSchemaMongo);
    const place = new model(data);
    const createdPlace = await place.save();
    return createdPlace;
}