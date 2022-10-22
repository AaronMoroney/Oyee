const express = require('express');
const router = express.Router();
//controllers
const userCtrl = require('../controllers/user');
//multer
const multer = require('../middleware/multer-config');

//POST route for signup
router.post('/signup', multer, userCtrl.signup);
//POST route for login
router.post('/login',  userCtrl.login);
//GET route for logged in profile page
router.get('/profilepage/:userId', userCtrl.getOneUser);
//GET route for logged in profile page
router.get('/userprofilepage/:userId', userCtrl.getOtherUser);

//export router
module.exports = router;
