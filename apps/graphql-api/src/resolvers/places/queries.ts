import { listAllPlaces } from "@troveed/business-logic";
import { Place, Result } from "@troveed/entities";

export const queries = {
    async places(): Promise<Result<Place>> {
        const listedPlaces = await listAllPlaces({ page: 1, limit: 20 });
        return listedPlaces;
    }
};
