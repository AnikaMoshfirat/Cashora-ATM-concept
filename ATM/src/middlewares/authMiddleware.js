const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

function authenticateToken(req, res, next) {
    const token = req.cookies.auth_token;  // Correct variable name
    console.log('Token from cookies:', token);  // Use 'token' instead of 'auth_token'

    if (!token) {
        return res.sendStatus(401);  // Unauthorized if token is not present
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            console.error('JWT verification failed:', err);  // Log error
            return res.sendStatus(403);  // Forbidden if token is invalid
        }
        req.user = user;  // Attach user information to the request
        next();
    });
}

function checkAdmin(req, res, next) {
    if (req.user && req.user.adminstatus) {
        next();  // User is admin, proceed
    } else {
        res.status(403).json({ error: 'Access forbidden: Admins only' });
    }
}

module.exports = { authenticateToken, checkAdmin };
