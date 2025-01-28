import places from "./places";

export const resolvers = {
    Query: {
        ...places.Query
    },
    Mutation: {
        ...places.Mutation
    },
    Subscription: {}
}