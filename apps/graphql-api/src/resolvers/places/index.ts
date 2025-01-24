import mutations from "./mutations";
import queries from "./queries";

export default {
    Query: {
        ...queries.Query
    },
    Mutation: {
        ...mutations.Mutation
    },
    Subscription: {}
}