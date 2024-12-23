import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(cookieParser());
 // routes definition
import userRoutes from "./router/userRoutes.js"
import habitRoutes from "./router/habitRoutes.js"
import aiRoutes from "./router/aiRoutes.js"
 



// routes declaration
app.use('/api/users', userRoutes);
app.use('/api/habits', habitRoutes);
app.use('/api/ai', aiRoutes);


export {app}