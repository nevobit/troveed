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
    place(name: String, status: String): Place
}

type Subscription{
    hello: String
}
`