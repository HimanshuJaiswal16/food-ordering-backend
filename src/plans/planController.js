const { promisePool } = require('./../../config/db');

exports.getAllPlans = async (req, res) => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM plans');
    res.json(rows);
  } catch (err) {
    console.error('MySQL error:', err);
    res.status(500).json({ error: 'Database error' });
  }
};