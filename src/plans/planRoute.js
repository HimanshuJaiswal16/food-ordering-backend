const express = require('express');
const router = express.Router();
const { getAllPlans } = require('./planController');
const authMiddleware = require('./../auth/authMiddleware');

// GET /api/plans
router.get('/plans', getAllPlans);

module.exports = router;