import mongoose, { mongo } from "mongoose";

const connectDB = () => {
    try {
        const conn = mongoose.connect(process.env.MONGO_URI);
    } catch (error) {
        console.log(error);
    }
};

export default connectDB;
