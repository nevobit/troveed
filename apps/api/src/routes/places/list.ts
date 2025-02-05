import { listAllPlaces } from '@troveed/business-logic';
import { RouteOptions } from "fastify";

export const fetchAllPlacesRoute: RouteOptions = {
    method: 'GET',
    url: '/places',
    handler: async (request, reply) => {
        const params = request.query as { page: number, limit: number};
        const places = await listAllPlaces({page: Number(params.page), limit: Number(params.limit)});
        reply.status(200).send(places)
    }
}