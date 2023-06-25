import express from 'express';
import useragent from 'express-useragent';
import connect from './util/db';
import cookieParser from 'cookie-parser';
import { authRoutes } from './routes/authRoutes';
import { userRoutes } from './routes/userRoutes';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

connect();

app.use(express.json());
app.use(useragent.express());
app.use(cookieParser());

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
