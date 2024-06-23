import pool from '@/lib/db';

async function deleteTask(req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { id } = req.body;

  try {
    const result = await pool.query('DELETE FROM tarea WHERE id = $1', [id]);
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (err) {
    console.error('Database query error:', err.stack);
    res.status(500).json({ message: 'Database query error', error: err.stack });
  }
}

export default deleteTask;
