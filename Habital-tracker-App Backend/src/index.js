import mongoose from 'mongoose'
import dotenv from 'dotenv'
import DB_NAME from './constraint.js'
import { app } from './app.js';

dotenv.config();

// mongodb+srv://Naman2705:<db_password>@cluster0.euw5hkt.mongodb.net/
// mongodb+srv://Naman2705:qS0xYtbCbghQD3gK@cluster0.euw5hkt.mongodb.net


const connectionInstance = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB connected !!!`)
    } catch(error){
        console.log("Error while connecting to database",error)
        process.exit(1)
    }
        

}
connectionInstance();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})








export default connectionInstance