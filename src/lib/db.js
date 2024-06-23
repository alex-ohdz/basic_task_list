import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  user: process.env.local.POSTGRES_USER,
  host: process.env.local.POSTGRES_HOST,
  database: process.env.local.POSTGRES_DATABASE,
  password: process.env.local.POSTGRES_PASSWORD,
  port: parseInt(process.env.local.POSTGRES_PORT, 10), 
});

export default pool;
