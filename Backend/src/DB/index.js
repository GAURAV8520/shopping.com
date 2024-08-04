import mongoose from "mongoose";
import dotenv from 'dotenv'
import { DB_NAME } from "../constants.js";


dotenv.config();

const connectDB = async ()=>{
    try {
        
        const connnectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        
        console.log("\n mongodb connected !! ")
    } catch (error) {
        console.log("MOngodb connection error :",error);
        process.exit(1);   
    }
}

export default connectDB;