import { RouteOptions } from "fastify";
import { fetchAllCategoriesRoute } from "./list"
import { createCategoriesRoute } from "./create";

export const categoriesRoutes: RouteOptions[] = [
    fetchAllCategoriesRoute,
    createCategoriesRoute
]