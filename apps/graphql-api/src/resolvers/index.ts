import { listAllPlaces } from "@troveed/business-logic"

export default {
    Query: {
        async places() {
            const listedPlaces = await listAllPlaces({ page: 1, limit: 20 });
            return listedPlaces;
        }
    },
    Mutation: {},
    Subscription: {}
}