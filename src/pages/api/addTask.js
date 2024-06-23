import pool from '@/lib/db';

async function addTask(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { texto } = req.body;

  if (!texto) {
    return res.status(400).json({ message: 'Task text is required' });
  }

  try {
    const result = await pool.query('INSERT INTO tarea (texto) VALUES ($1) RETURNING *', [texto]);
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error('Database query error:', err.stack);
    res.status(500).json({ message: 'Database query error', error: err.stack });
  }
}

export default addTask;
