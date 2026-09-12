require('dotenv').config();
const express = require('express');
const db = require('./config/db');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const adminRoutes = require('./routes/adminRoutes');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
app.use(bodyParser.json());

// Configure CORS
app.use(cors({
    origin: ' http://localhost:5173', // Allow requests from this origin
    credentials: true,               // Allow cookies to be sent
}));


app.use(cookieParser());

// Define routes
app.use('/auth', authRoutes);
app.use('/transaction', transactionRoutes);
app.use('/admin', adminRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
