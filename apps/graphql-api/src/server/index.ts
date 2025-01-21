import 'dotenv/config';
import fastify from 'fastify';
import fastifyCors from '@fastify/cors';
import { ApolloServer } from '@apollo/server';

import { version, name } from '../../package.json';

const { PORT, METHODS, CORS_ORIGINS } = process.env;

const methods = METHODS?.split(",");

const corsOptions = {
    origin: CORS_ORIGINS.split(',')
}

const main = async () => {
    const app = fastify();
    app.register(fastifyCors, corsOptions);

    const server = new ApolloServer({
        schema,
        plugins: [],
        introspection: true,
        apollo: {}
    });

    await server.start();

    app.route({
        url: 'graphql',
        method: methods,
        handler: () => {}
    });

    await app.listen({ port: PORT });
    console.log(`Server ${name} in version:${version} running on http://localhost:${PORT}`)
    
}

void main();