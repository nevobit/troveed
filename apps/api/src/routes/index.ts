import { FastifyInstance, RouteOptions } from "fastify";
import { placesRoutes } from "./places";

const routes: RouteOptions[] = [
    ...placesRoutes
]

export const registerRoutes = (fastify: FastifyInstance)  => {
    routes.map((route) => {
        fastify.route(route);
    })
}