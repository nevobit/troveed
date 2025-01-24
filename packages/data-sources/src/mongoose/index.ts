import mongoose from 'mongoose';

export const initMongoose = async (mongoUri: string) => {
    if (!mongoUri) {
        throw new Error("Mongodb URI is not provided");
    }
    
    try {
        const connection = mongoose.connection;

        connection.on("error", (error: Error) => {
            throw new Error(JSON.stringify(error));
        });

        connection.on("connected", () => {
            console.log(`Mongoose: connected to ${connection.name}`)
        });

        connection.on("reconnectFailed", () => {
            console.error("Mongoose: DB Connection Lost, retries failed");
        });

        await mongoose.connect(mongoUri, {
            connectTimeoutMS: 0,
            socketTimeoutMS: 0,
            family: 4,
            autoIndex: process.env.NODE_ENV !== "production",
            readPreference: "nearest",
        });

    } catch (error) {
        console.log("Error to connecto to Database")
    }

}