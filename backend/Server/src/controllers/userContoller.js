const { createUser,getAllUsers,updateUser } = require('../Queries/userQuery');

// Controller function to create a new user
const createUserController = (req, res) => {
  const userData = req.body; // Assuming user data is sent in the request body
  
  createUser(userData, (error, results) => {
    if (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.status(201).json({ message: "User created successfully", userID: results.insertId });
  });
};


//get all users
const getAllUsersController = (req, res) => {
  getAllUsers((error, results) => {
    if (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(results);
  });
};
// Controller function to update a user by ID
const updateUserController = (req, res) => {
  const userID = req.params.userID;
  const updatedUserData = req.body;

  updateUser(userID, updatedUserData, (error, result) => {
    if (error) {
      console.error("Error updating user:", error);
      res.status(500).json({ error: "Internal server error" });
      return;
    }

    if (!result) {
      res.status(404).json({ message: `User with ID ${userID} not found` });
      return;
    }

    // Extract the new token from the result
    const { token } = result;

    // User updated successfully, send the new token in the response
    res.json({ message: `User with ID ${userID} updated successfully`, token: token });
  });
};

module.exports = {
  createUserController,
  getAllUsersController,
  updateUserController
};
