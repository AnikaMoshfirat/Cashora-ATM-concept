require('dotenv').config();
const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

async function initializeDatabase() {
    try {
        console.log('Initializing database...');

        // Create 'users' table if it does not exist
        await db.execute(`
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                balance DECIMAL(10, 2) DEFAULT 0.00,
                adminstatus BOOLEAN DEFAULT 0
            )
        `);
        console.log('Users table initialized.');

        // Create 'transactions' table without recipient_id
        await db.execute(`
            CREATE TABLE IF NOT EXISTS transactions (
                id INT AUTO_INCREMENT PRIMARY KEY,
                user_id INT NOT NULL,
                type ENUM('deposit', 'withdrawal', 'transfer') NOT NULL,
                amount DECIMAL(10, 2) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(id)
            )
        `);
        console.log('Transactions table initialized without recipient_id.');

    } catch (error) {
        console.error('Error initializing database:', error);
    }
}

// Initialize the database when the app starts
initializeDatabase();

module.exports = db;
