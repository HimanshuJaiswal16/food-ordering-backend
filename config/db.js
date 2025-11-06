// const mysql = require('mysql2/promise');

// // Create the promise-based pool directly
// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   database: 'FoodOrderSolution',
//   password: '',
//   waitForConnections: true,
// });

// module.exports = { promisePool: pool };

// config/db.js
const mysql = require('mysql2/promise');

const promisePool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});


module.exports = { promisePool };
