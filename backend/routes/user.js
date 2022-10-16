const express = require('express');
const router = express.Router();
//auth
//const auth = require('../middleware/auth');
const userCtrl = require('../controllers/user');


//POST route for signup
router.post('/signup',  userCtrl.signup);
//POST route for login
router.post('/login',  userCtrl.login);
//GET route for logged in profile page
router.get('/profilepage/:userId', userCtrl.getOneUser);
//GET route for logged in profile page
router.get('/userprofilepage/:userId', userCtrl.getOtherUser);

//export router
module.exports = router;
