// src/routes/adminRoutes.js
const express = require('express');
const { getUsers, getTransactions } = require('../controllers/adminController'); // Import controller functions
const { authenticateToken, checkAdmin } = require('../middlewares/authMiddleware');

const router = express.Router();

// Define routes with appropriate middlewares
router.get('/users', authenticateToken, checkAdmin, getUsers);
router.get('/transactions', authenticateToken, checkAdmin, getTransactions);

module.exports = router;
