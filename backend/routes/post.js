const express = require('express');
const router = express.Router();
//auth
const auth = require('../middleware/auth');
//controllers
const PostCtrl = require('../controllers/post');

//retrieve an array of posts
router.get('/', auth, PostCtrl.postList); 
//saving new posts to DB 
router.post('/', auth, PostCtrl.createPost); //added auth

//export
module.exports = router;
