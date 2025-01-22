export const typeDefs = `

type Place {
    id: String
    name: String
    status: String
}

type ResultPlaces {
    count: Int
    items: [Place]
}

type Query{
    places: ResultPlaces
}

type Mutation{
    hello: String
}

type Subscription{
    hello: String
}
`