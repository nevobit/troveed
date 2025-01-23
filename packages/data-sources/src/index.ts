import { initMongoose } from "./mongoose"
import { initRedis } from "./redis";

export const initDataSources = async ({ mongoose, redis, postgresql }: { mongoose?: any, redis?: any, postgresql?: any }) => {
    if(mongoose){
        await initMongoose(mongoose);
    }

    if(redis){
        await initRedis();
    }

    if(postgresql){
        console.log("Initialized POSGRESQL")
    }
}