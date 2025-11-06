// const mysql = require('mysql2/promise');

// // Create the promise-based pool directly
// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   database: 'fnsolutions',
//   password: '',
//   waitForConnections: true,
// });

// module.exports = { promisePool: pool };

// config/db.js
const mysql = require('mysql2/promise');

const promisePool = mysql.createPool({
  host: 'food-cafe-ordering.cjg6sw8e49xw.ap-south-1.rds.amazonaws.com',
  port: 3306,
  user: 'admin',
  password: 'y3r4p53XJjZigqZelAko',
  database: 'FoodOrderSolution',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = { promisePool };
