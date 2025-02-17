import { Place, Result } from "@troveed/entities";
import { troveedApi } from "../../../api"

export const placesApi = async (limit: string, page: string): Promise<Result<Place>> => {
    const { data } = await troveedApi.get(`/places?limit=${limit}&page=${page}`);
    return data;
}