import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  user: process.env.local.PG_USER,
  host: process.env.local.PG_HOST,
  database: process.env.local.PG_DATABASE,
  password: process.env.local.PG_PASSWORD,
  port: parseInt(process.env.local.PG_PORT, 10), 
});

export default pool;
