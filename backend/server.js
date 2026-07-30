import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './Routes/userRoute.js';
import productRouter from './Routes/productRoute.js';
import cartRouter from './Routes/cartRoute.js';
import orderRouter from './Routes/orderRoute.js';


// API Config
const app = express()
const port = process.env.PORT || 4000;

// middlewares
app.use(cors({
    origin: [
        "http://localhost:5173",
        "http://localhost:5174", 
        "https://forever-frontend-vert-two.vercel.app",
        "https://forever-admin-three-chi.vercel.app"
    ],
    credentials: true
}));
app.use(express.json());



// Database Connection
await connectDB();
connectCloudinary();

// API Endpoints

app.use('/api/user/', userRouter)
app.use('/api/product/', productRouter)
app.use('/api/cart', cartRouter)

app.use('/api/order', orderRouter)

app.get('/', (req, res) => {
    res.send("API Working");
});



app.listen(port, () => {
    console.log("Server Started at port:", port);
})

























































// import express from 'express';
// import cors from 'cors';
// import 'dotenv/config';
// import connectCB from "./config/mongodb.js";

// // API Config
// const app = express();
// const port = process.env.PORT || 4000;

// // middlewares
// app.use(express.json())
// app.use(cors())

// // DB Connection
// connectDB();

// // API Endpoints
// app.get('/', (req,res)=>{
//     res.send("API Working");
// })

// app.listen(port,()=>{
//     console.log("Server Started at port: ",port)
// })