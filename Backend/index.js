import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './DB/connectDB.js';

import router from './Routes/auth.route.js';

dotenv.config();

const app = express();

app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Hello, World!');
})

app.get("/api/auth", router);

app.listen(process.env.PORT, (req, res) => {
    connectDB();
    console.log(`Server is running on port ${process.env.PORT}`);
})