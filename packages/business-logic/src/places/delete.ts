import { Place, PlaceSchemaMongo, StatusType } from "@troveed/entities";
import mongoose from "mongoose";

export const deletePlace = async (data: Partial<Place>) => {
    const model = mongoose.model("places", PlaceSchemaMongo);
    const deletedPlace = await model.findByIdAndUpdate(data.id, { status: StatusType.DELETED });
    return deletedPlace;
}