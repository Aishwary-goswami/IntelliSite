import mongoose from "mongoose";
import "dotenv/config"
const connectDB = async()=>{
   try {
     await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log("Database connected !");
   } catch (error) {
    console.log("database connection error" , error);
   }
}

export default connectDB;