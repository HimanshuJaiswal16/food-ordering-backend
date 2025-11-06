const { promisePool } = require('../../config/db');
const crypto = require("crypto");
const bcrypt = require('bcryptjs');

async function findUserByEmail(email) {
  const [rows] = await promisePool.query(
    'SELECT * FROM users WHERE email = ?',
    [email]
  );
  return rows[0];
}

async function createUser({ email, password, name }) {

  let uuid = crypto.randomUUID();
  const hashedPassword = await bcrypt.hash(password, 10);

  const [result] = await promisePool.query(
    'INSERT INTO users (email, password, name, user_id) VALUES (?, ?, ?, ?)',
    [email, hashedPassword, name, uuid]
  );
  return { id: result.insertId, email, name, uuid};
}

module.exports = {
  findUserByEmail,
  createUser,
};