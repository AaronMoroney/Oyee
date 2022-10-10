const express = require('express');
const router = express.Router();
//auth
const auth = require('../middleware/auth');
//multer
const multer = require('../middleware/multer-config');
//controllers
const PostCtrl = require('../controllers/post');

//saving new posts to DB 
router.post('/', auth, multer, PostCtrl.createPost); 
//retrieve an array of posts with auth
router.get('/', auth, PostCtrl.postList); 

//export
module.exports = router;
