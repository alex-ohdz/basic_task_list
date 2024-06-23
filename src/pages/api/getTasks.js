import pool from '@/lib/db';

async function getTasks(req, res) {
  try {
    const result = await pool.query('SELECT * FROM tarea ORDER BY id DESC');
    res.status(200).json(result.rows); 
  } catch (err) {
    console.error('Database query error:', err.stack);
    res.status(500).json({ message: 'Database query error', error: err.stack });
  }
}

export default getTasks;
