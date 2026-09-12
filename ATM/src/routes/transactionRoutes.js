const express = require('express');
const { deposit, withdraw, transfer, getBalance } = require('../controllers/transactionController');
const { authenticateToken } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/deposit', authenticateToken, deposit);
router.post('/withdraw', authenticateToken, withdraw);
router.post('/transfer', authenticateToken, transfer);

// New route for getting the balance of the authenticated user
router.get('/balance', authenticateToken, getBalance);

module.exports = router;
