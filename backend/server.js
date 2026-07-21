import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectCB from "./config/mongodb.js";

// API Config
const app = express();
const port = process.env.PORT || 4000;



// middlewares
app.use(express.json())
app.use(cors())

// DB Connection
connectDB();

// API Endpoints
app.get('/', (req,res)=>{
    res.send("API Working");
})

app.listen(port,()=>{
    console.log("Server Started at port: ",port)
})