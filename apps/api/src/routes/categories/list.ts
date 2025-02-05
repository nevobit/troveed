import { listAllCategories } from "@troveed/business-logic";
import { RouteOptions } from "fastify";

export const fetchAllCategoriesRoute: RouteOptions = {
    method: 'GET',
    url: '/categories',
    handler: async (request, reply) => {
        const params = request.query as { page: number, limit: number};
        const categories = await listAllCategories({page: Number(params.page), limit: Number(params.limit)});
        reply.status(200).send(categories)
    }
}