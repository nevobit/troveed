import { Place, Result } from "@troveed/entities";
import { troveedApi } from "../../../api"

export const placesApi = async (): Promise<Result<Place>> => {
    const { data } = await troveedApi.get('/places');
    return data;
}