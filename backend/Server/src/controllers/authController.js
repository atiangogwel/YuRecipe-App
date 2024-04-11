const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../jwtConfig');
const { authenticateUser } = require('../Queries/authQuery');

// Controller function to handle user login
const loginUser = (req, res) => {
  const { email, password } = req.body;

  authenticateUser(email, password, (error, user) => {
    if (error || !user) {
      // Authentication failed
      res.status(401).json({ success: false, message: 'Authentication failed' });
      return;
    }

    // Generate JWT token using the secret key from jwtConfig.js
    const token = jwt.sign({ userID: user.userID }, JWT_SECRET, { expiresIn: '1h' });

    // Authentication successful, send token in response
    res.json({ response: true, message: 'Login successful'});
  });
};

module.exports = {
  loginUser
};
