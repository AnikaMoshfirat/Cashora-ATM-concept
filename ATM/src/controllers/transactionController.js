const db = require('../config/db');

exports.deposit = async (req, res) => {
    const { amount } = req.body;
    const userId = req.user.id;  // Get userId from the authenticated user

    if (amount <= 0) return res.status(400).json({ error: 'Deposit amount must be positive' });

    try {
        // Update the balance for the authenticated user
        await db.execute('UPDATE users SET balance = balance + ? WHERE id = ?', [amount, userId]);

        // Record the transaction without recipient_id
        const [result] = await db.execute('INSERT INTO transactions (user_id, type, amount) VALUES (?, "deposit", ?)', [userId, amount]);

        res.json({
            message: 'Deposit successful',
            transaction: {
                transactionId: result.insertId,
                amount,
                type: 'deposit'
            }
        });
    } catch (error) {
        console.error('Deposit error:', error);
        res.status(500).json({ error: 'Deposit failed due to server error' });
    }
};

exports.withdraw = async (req, res) => {
    const { amount } = req.body;
    const userId = req.user.id;  // Get userId from the authenticated user

    if (amount <= 0) return res.status(400).json({ error: 'Withdrawal amount must be positive' });

    try {
        const [rows] = await db.execute('SELECT balance FROM users WHERE id = ?', [userId]);
        const balance = rows[0].balance;

        if (balance < amount) return res.status(400).json({ error: 'Insufficient funds' });

        // Deduct balance for the authenticated user
        await db.execute('UPDATE users SET balance = balance - ? WHERE id = ?', [amount, userId]);

        // Record the transaction without recipient_id
        const [result] = await db.execute('INSERT INTO transactions (user_id, type, amount) VALUES (?, "withdrawal", ?)', [userId, amount]);

        res.json({
            message: 'Withdrawal successful',
            transaction: {
                transactionId: result.insertId,
                amount,
                type: 'withdrawal'
            }
        });
    } catch (error) {
        console.error('Withdrawal error:', error);
        res.status(500).json({ error: 'Withdrawal failed due to server error' });
    }
};

exports.transfer = async (req, res) => {
    const { amount, recipientId } = req.body;
    const userId = req.user.id;  // Get userId from the authenticated user

    if (amount <= 0) return res.status(400).json({ error: 'Transfer amount must be positive' });

    try {
        const [sender] = await db.execute('SELECT balance FROM users WHERE id = ?', [userId]);
        if (!sender.length) return res.status(404).json({ error: 'Sender not found' });

        if (sender[0].balance < amount) return res.status(400).json({ error: 'Insufficient funds' });

        // Ensure recipient exists
        const [recipient] = await db.execute('SELECT id FROM users WHERE id = ?', [recipientId]);
        if (!recipient.length) return res.status(404).json({ error: 'Recipient not found' });

        // Perform the transfer
        await db.execute('UPDATE users SET balance = balance - ? WHERE id = ?', [amount, userId]);
        await db.execute('UPDATE users SET balance = balance + ? WHERE id = ?', [amount, recipientId]);

        // Insert the transaction record
        const [result] = await db.execute('INSERT INTO transactions (user_id, type, amount) VALUES (?, "transfer", ?)', [userId, amount]);

        res.json({
            message: 'Transfer successful',
            transaction: {
                userId: userId,
                amount,
                recipientId,
                transactionId: result.insertId
            }
        });
    } catch (error) {
        console.error('Transfer error:', error);
        res.status(500).json({ error: 'Transfer failed due to server error' });
    }
};

exports.getBalance = async (req, res) => {
    const userId = req.user.id;  // Get userId from the authenticated user

    try {
        // Retrieve the balance for the authenticated user
        const [rows] = await db.execute('SELECT balance FROM users WHERE id = ?', [userId]);

        if (!rows.length) {
            return res.status(404).json({ error: 'User not found' });
        }

        const balance = rows[0].balance;

        res.json({
            message: 'Balance retrieved successfully',
            balance
        });
    } catch (error) {
        console.error('Balance retrieval error:', error);
        res.status(500).json({ error: 'Failed to retrieve balance due to server error' });
    }
};

