import { createPlace } from '@troveed/business-logic';
import { Place } from '@troveed/entities';
import { RouteOptions } from "fastify";

export const createPlacesRoute: RouteOptions = {
    method: 'POST',
    url: '/places',
    handler: async (request, reply) => {
        const data = request.body as Partial<Place>;
        const place = await createPlace(data);
        reply.status(201).send(place)
    }
}