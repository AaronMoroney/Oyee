const express = require('express');
const router = express.Router();
//auth
//const auth = require('../middleware/auth');
const userCtrl = require('../controllers/user');


//POST route for signup
router.post('/signup',  userCtrl.signup);
//POST route for login
router.post('/login',  userCtrl.login);
//GET route for array of users
//router.get('/', userCtrl.userList);
//GET route for user profile page
router.get('/:id', userCtrl.getOneUser);


//export router
module.exports = router;
