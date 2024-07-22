import express from 'express';
import { config } from 'dotenv';
import appRouter from './routes/index.js';
import cookieParser from 'cookie-parser';


import morgan from 'morgan';

config();
const app = express();



//middlewares
app.use(express.json());
app.use(cookieParser());

//remove it in production
app.use(morgan('dev'));

app.use("/api/v1", appRouter);

//connections and listeners


export default app;

