import { FastifyInstance, RouteOptions } from "fastify";
import { placesRoutes } from "./places";
import { categoriesRoutes } from "./categories";


const routes: RouteOptions[] = [
    ...placesRoutes,
    ...categoriesRoutes
]

export const registerRoutes = (fastify: FastifyInstance)  => {
    routes.map((route) => {
        fastify.route(route);
    })
}