import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`,
            {
                serverSelectionTimeoutMS: 5000,
                connectTimeoutMS: 10000,
            }
        );
        console.log(
            `\n MongoDB connected: ${connectionInstance.connection.host} \n`
        );
        return true;
    } catch (error) {
        console.log("MongoDB connection error: ", error.message);
        console.log("\n⚠️  Starting server without MongoDB. Database features will not work. ⚠️\n");
        return false;
    }
};

export default connectDB;
