import { RouteOptions } from "fastify";
import { fetchAllPlacesRoute } from "./list";
import { createPlacesRoute } from "./create";

export const placesRoutes: RouteOptions[] = [
    fetchAllPlacesRoute,
    createPlacesRoute
]