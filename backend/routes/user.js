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
//GET route for logged in profile 
router.get('/profilepage/:userId', userCtrl.getOneUser);
//GET route other user profile 
router.get('/userprofilepage/:userId', userCtrl.getOtherUser);
//delete a user from DB
router.delete('/:userId', userCtrl.deleteUser);

//export router
module.exports = router;
