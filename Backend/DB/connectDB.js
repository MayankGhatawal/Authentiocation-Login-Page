import mongoose from "mongoose";

export const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log('Connecting to MongoDB');
    } catch (error) {
        console.log('Error', error);
        process.exit(1);
    }
}