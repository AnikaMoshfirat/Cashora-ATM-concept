// src/controllers/adminController.js
const db = require('../config/db');

exports.getUsers = async (req, res) => {
    try {
        const [users] = await db.execute('SELECT id, username, balance, adminstatus FROM users');
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve users' });
    }
};

exports.getTransactions = async (req, res) => {
    try {
        const [transactions] = await db.execute('SELECT * FROM transactions');
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve transactions' });
    }
};
