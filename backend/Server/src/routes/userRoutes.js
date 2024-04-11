const express = require('express');
const router = express.Router();

const {createUserController,getAllUsersController, getUserByIdController,updateUserController, deleteUserController } = require('../controllers/userContoller');


router.post('/users', createUserController);
router.get('/users', getAllUsersController);
router.put('/users/:userID', updateUserController);

module.exports = router;
