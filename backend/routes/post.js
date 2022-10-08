const express = require('express');
const router = express.Router();
//auth
const auth = require('../middleware/auth');
//controllers
const PostCtrl = require('../controllers/post');

//saving new posts to DB 
router.post('/', auth, PostCtrl.createPost); 
//retrieve an array of sc
//router.get('/', PostCtrl.postList); 
//retrieve an array of sc with auth
router.get('/', auth, PostCtrl.postList); 

//export
module.exports = router;
