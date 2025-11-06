const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const color = require('colors');

// Routes
const authRoutes = require('./src/auth/authRoute');
const plansRoute = require('./src/plans/planRoute');


const app = express();

// Middleware
app.use(cors());
app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api', plansRoute);

// ✅ Token verification middleware
function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Access denied' });

  try {
    const decoded = jwt.verify(token, 'your-secret-key'); // ideally from env
    req.user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ message: 'Invalid token' });
  }
}

// ✅ Protected route example
app.get('/api/protected', verifyToken, (req, res) => {
  res.json({ message: 'You are authenticated', user: req.user });
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`.bgMagenta.white);
});