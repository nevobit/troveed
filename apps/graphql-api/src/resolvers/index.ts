import { listAllPlaces } from "@troveed/business-logic"

export default {
    Query: {
        places() {
            const listedPlaces = listAllPlaces();
            return listedPlaces;
        }
    },
    Mutation: {},
    Subscription: {}
}