import 'dotenv/config';
import fastify from 'fastify';
import fastifyCors from '@fastify/cors';
import { ApolloServer } from '@apollo/server';
import { HTTPMethods } from 'fastify/types/utils'
import { makeExecutableSchema } from '@graphql-tools/schema';
import resolvers from '../resolvers';
import { typeDefs } from '../typedefs';
import {
    fastifyApolloDrainPlugin,
    fastifyApolloHandler,
  } from '@as-integrations/fastify';

import { version, name } from '../../package.json';
import { initDataSources } from '@troveed/data-sources';

const { PORT, METHODS, CORS_ORIGINS, MONGO_URI } = process.env;

const methods = METHODS?.split(",") as HTTPMethods[];

const corsOptions = {
    origin: CORS_ORIGINS?.split(',')
}

const main = async () => {
    await initDataSources({ mongoose: MONGO_URI, redis:"fkd" })
    
    const app = fastify();
    app.register(fastifyCors, corsOptions);

    const schema = makeExecutableSchema({ typeDefs, resolvers });

    const server = new ApolloServer({
        schema,
        plugins: [fastifyApolloDrainPlugin(app)],
        introspection: true,
        apollo: {}
    });
    await server.start();

    app.route({
        url: '/graphql',
        method: methods,
        handler: fastifyApolloHandler(server, {
            context: async (request) => ({ req: request }),
        }),
    });

    await app.listen({ port: Number(PORT) });
    console.log(`Server ${name} in version:${version} running on http://localhost:${PORT}`)
}

void main();