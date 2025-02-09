import 'dotenv/config';
import fastify from 'fastify';
import { registerRoutes } from '../routes';
import { initDataSources } from '@troveed/data-sources';
import fastifyCors from '@fastify/cors';

const { MONGO_URI } = process.env;

const main = async () => {
    await initDataSources({ mongoose: MONGO_URI })

    const server = fastify({
        logger: true
    });

    server.register(fastifyCors, {
        origin: "*"
    });
    
    server.register((instance, options, next) => {
        registerRoutes(instance);
        next();
    }, { prefix: 'api/v1' })

    server.listen({ port: 8000 });
}

void main();