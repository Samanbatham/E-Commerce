import mongoose from "mongoose";

const dbConnect = async()=>{
    try {
       await mongoose.connect(process.env.MONGO_DB_URL);
       console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error,"Error connecting to mongoDB");  
    }
}
export default  dbConnect;

