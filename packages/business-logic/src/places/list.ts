import { Result, Place } from "@troveed/entities";

export const listAllPlaces = (): Result<Place> => {
    const places: Place[] = [
        {
            id: 'sd23c-d23d23-d232d23',
            name: "San Andres",
            location: { lng: 34, ltd: 24 },
            status: "active",
            updatedAt: new Date(),
            createdAt: new Date()
        },
        {
            id: 'sd23c-fdfef-d232d23',
            name: "Alemania",
            location: { lng: 14, ltd: 94 },
            status: "active",
            updatedAt: new Date(),
            createdAt: new Date()
        }
    ];

    return {
        count: places.length,
        items: places,
        pageInfo: {
            page: 1,
            hasNextPage: false,
            hasPrevPage: false,
            nextPage: 0,
            prevPage: 0
        }
    }
}