import 'dotenv/config';
import fastify from 'fastify';
import { registerRoutes } from '../routes';
import { initDataSources } from '@troveed/data-sources';

const { MONGO_URI } = process.env;

console.log('mongo uri es', MONGO_URI)
const main = async () => {
    await initDataSources({ mongoose: MONGO_URI })
    console.log('mongo uri es', MONGO_URI)

    const server = fastify({
        logger: true
    });

    server.register((instance, options, next) => {
        registerRoutes(instance);
        next();
    }, { prefix: 'api/v1' })

    server.listen({ port: 8000 });
}

void main();