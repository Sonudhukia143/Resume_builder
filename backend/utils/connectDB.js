import mongoose from 'mongoose';

export default async function connectDb () {
    if (mongoose.connection.readyState >= 1) {
        return;
    }
    console.log("Connecting to local database");

    try {
        await mongoose.connect(process.env.MONGO_ATLAS_URL);
        console.log("Connected to the database.");
    } catch (error) {
        console.log("Error in establishing connection with the database: " + error);
    }
};

export const corsOptions = {
    origin: ['http://localhost:5173','https://resumbuilder.netlify.app'],   
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH'],
    optionsSuccessStatus: 200,
    allowedHeaders: ['Content-Type', 'Authorization'],
};