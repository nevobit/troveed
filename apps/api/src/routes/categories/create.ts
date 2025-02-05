import { createCategory } from "@troveed/business-logic";
import { Category } from "@troveed/entities";
import { RouteOptions } from "fastify";

export const createCategoriesRoute: RouteOptions = {
    method: 'POST',
    url: '/categories',
    handler: async (request, reply) => {
        const data = request.body as Partial<Category>;
        const category = await createCategory(data);
        reply.status(201).send(category)
    }
}