import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './DB/connectDB.js';

import authRouter from './Routes/auth.route.js';

dotenv.config();

const app = express();

app.use(express.json());

app.get("/api/auth", authRouter);

app.listen(process.env.PORT, (req, res) => {
    connectDB();
    console.log(`Server is running on port ${process.env.PORT}`);
})