const express = require('express');
const router = express.Router();
//auth
const auth = require('../middleware/auth');
//multer
const multer = require('../middleware/multer-config');
//controllers
const PostCtrl = require('../controllers/post');

//saving new posts to DB 
router.post('/', auth, PostCtrl.createPost); 
//retrieve an array of sc
//router.get('/', PostCtrl.postList); 
//retrieve an array of sc with auth
router.get('/', auth, multer, PostCtrl.postList); 

//export
module.exports = router;
