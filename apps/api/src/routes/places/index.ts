import { RouteOptions } from "fastify";
import { fetchAllPlacesRoute } from "./list";

export const placesRoutes: RouteOptions[] = [
    fetchAllPlacesRoute
]