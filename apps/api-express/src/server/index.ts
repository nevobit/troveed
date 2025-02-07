import 'dotenv/config';
import express from 'express';
import { initDataSources } from '@troveed/data-sources';
import { listAllPlaces } from '@troveed/business-logic';

const { MONGO_URI } = process.env;

const main = async() => {
    await initDataSources({ mongoose: MONGO_URI });

    const server = express();

    server.get('/api/v1/places', async (request, response) => {
        const params = request.query as unknown as { page: number, limit: number};
        const places = await listAllPlaces({page: Number(params.page), limit: Number(params.limit)});
        response.status(200).send(places)
    });

    server.listen(8004);
}

void main();