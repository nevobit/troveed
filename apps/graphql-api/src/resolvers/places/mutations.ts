import { createPlace } from "@troveed/business-logic";
import { Place } from "@troveed/entities";

type MutationResolvers = {
    place: () => Promise<Place>;
}

export default {
    Mutation: {
        async place(_: any, data: Partial<Place> ): Promise<Place> {
            console.log(data)
            const createdPlace = await createPlace(data);
            return createdPlace;
        }
    },
} as { Mutation: MutationResolvers };
