import places from "./places";

export default {
    Query: {
        ...places.Query
    },
    Mutation: {
        ...places.Mutation
    },
    Subscription: {}
}