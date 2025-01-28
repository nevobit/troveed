import {  PlaceSchemaMongo } from "@troveed/entities";
import mongoose from "mongoose";

export const findPlaceById = async (id: string) => {
    const model = mongoose.model("places", PlaceSchemaMongo);
    const place = await model.findById(id);
    return place;
}