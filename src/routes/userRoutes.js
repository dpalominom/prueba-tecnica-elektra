const express = require('express');
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/register', userController.register);
router.get('/', auth, userController.getUsers);

module.exports = router;
