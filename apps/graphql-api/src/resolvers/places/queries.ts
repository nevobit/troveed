import { listAllPlaces } from "@troveed/business-logic";
import { Place, Result } from "@troveed/entities";

type QueryResolvers = {
    places: () => Promise<Result<Place>>;
};

export default {
    Query: {
        async places(): Promise<Result<Place>> {
            const listedPlaces = await listAllPlaces({ page: 1, limit: 20 });
            return listedPlaces;
        }
    },
} as { Query: QueryResolvers };
