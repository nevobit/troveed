import { listAllPlaces } from '@troveed/business-logic';
import { RouteOptions } from "fastify";

export const fetchAllPlacesRoute: RouteOptions = {
    method: 'GET',
    url: '/places',
    handler: async (request, reply) => {
        const places = listAllPlaces({page: 1, limit: 15});
        reply.status(200).send(places)
    }
}