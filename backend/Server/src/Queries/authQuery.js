const pool = require('../dbConfig');
const bcrypt = require('bcrypt');

// Function to authenticate user login
const authenticateUser = (email, password, callback) => {
  const query = 'SELECT * FROM users WHERE email = ?';
  pool.query(query, [email], (error, results) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (results.length === 0) {
      // User with the provided email does not exist
      callback(null, false);
      return;
    }

    const user = results[0];
    bcrypt.compare(password, user.password, (err, result) => {
      if (err || !result) {
        // Incorrect password
        callback(null, false);
        return;
      }
      // Password is correct, return the user data
      callback(null, user);
    });
  });
};

module.exports = {
  authenticateUser
};
