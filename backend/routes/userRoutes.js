const express = require('express');
const router = express.Router();

const {
  createUser,
  getUsers,
  deleteUser,
  signinUser
} = require('../controllers/userController');

// REGISTER
router.post('/register', createUser);

// LOGIN
router.post('/signin', signinUser);

// GET ALL USERS
router.get('/', getUsers);

// DELETE USER
router.delete('/:id', deleteUser);

module.exports = router;
