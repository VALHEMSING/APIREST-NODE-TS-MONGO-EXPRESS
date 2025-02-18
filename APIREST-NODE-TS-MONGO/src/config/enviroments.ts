import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const MONGO_URI = process.env.MONGO_URI || '';
export const ACCESS_TOKEN_SECRET = process.env.ACCESS_SECRET ||'secret';
export const REFRESH_TOKEN_SECRET = process.env.REFRESH_SECRET || 'refresh';
export const NODE_ENV = process.env.NODE_ENV || '';