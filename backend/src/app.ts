import express from 'express';
import { config } from 'dotenv';
import appRouter from './routes/index.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';


import morgan from 'morgan';

config();
const app = express();



//middlewares
app.use(cors({origin: 'http://localhost:5173', credentials: true}));
app.use(express.json());
app.use(cookieParser());

//remove it in production
app.use(morgan('dev'));

app.use("/api/v1", appRouter);

//connections and listeners


export default app;

