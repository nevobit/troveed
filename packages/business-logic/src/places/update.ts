import { Place, PlaceSchemaMongo } from "@troveed/entities";
import mongoose from "mongoose";

export const updatePlace = async (data: Partial<Place>) => {
    const model = mongoose.model("places", PlaceSchemaMongo);
    const updatedPlace = await model.findByIdAndUpdate(data.id, data);
    return updatedPlace;
}