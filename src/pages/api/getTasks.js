import pool from '@/lib/db';

async function getTasks(req, res) {
  try {
    const result = await pool.query('SELECT * FROM tarea');
    res.status(200).json(result.rows); // Asegúrate de devolver un arreglo
  } catch (err) {
    console.error('Database query error:', err.stack);
    res.status(500).json({ message: 'Database query error', error: err.stack });
  }
}

export default getTasks;
