import mongoose from 'mongoose';

export const initMongoose = async (mongoUri: string) => {
    if(!mongoUri){
        throw new Error("Mongodb URI is not provided");
    }

try {
    const connection = await mongoose.createConnection(mongoUri).asPromise();
    console.log(`Mongoose: connected to ${connection.name}`)
    
} catch (error) {
    console.log("Error to connecto to Database")
}

}